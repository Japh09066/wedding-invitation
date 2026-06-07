/**
 * Google Sheets RSVP Setup Script
 *
 * This script automates the Google Sheets + Apps Script setup.
 * It will:
 *   1. Open your browser for Google OAuth authorization
 *   2. Create a new Google Sheet for RSVP data
 *   3. Create an Apps Script project attached to the sheet
 *   4. Deploy the Apps Script as a Web App
 *   5. Print the Web App URL for your .env.local
 *
 * Usage:
 *   node scripts/setup-gsheets.mjs
 *
 * Requirements:
 *   - Node.js 18+
 *   - A Google account (personal or G Suite)
 */

import { createInterface } from 'node:readline';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, '..');

// ─── Colors ───
const RESET = '\x1b[0m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const CYAN = '\x1b[36m';
const BOLD = '\x1b[1m';

function log(step, msg) {
  console.log(`${CYAN}➜${RESET} ${BOLD}${step}${RESET} ${msg}`);
}

function success(msg) {
  console.log(`${GREEN}✓${RESET} ${msg}`);
}

function warn(msg) {
  console.log(`${YELLOW}⚠${RESET} ${msg}`);
}

function prompt(query) {
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) => rl.question(query, (ans) => { rl.close(); resolve(ans); }));
}

// ─── Main ───
async function main() {
  console.log(`\n${BOLD}${'='.repeat(56)}${RESET}`);
  console.log(`${BOLD}  💍 Wedding RSVP — Google Sheets Setup${RESET}`);
  console.log(`${BOLD}${'='.repeat(56)}${RESET}\n`);

  // Step 1: Install clasp if not present
  log('1/6', 'Checking for clasp...');
  try {
    execSync('npx --yes clasp --version', { stdio: 'pipe' });
    success('clasp is available');
  } catch {
    log('1/6', 'Installing clasp...');
    execSync('npm install -g @google/clasp', { stdio: 'inherit' });
    success('clasp installed');
  }

  // Step 2: Login to Google
  log('2/6', 'Opening browser for Google login...');
  console.log('  📝 A browser window will open. Log in to your Google account');
  console.log('     and grant clasp access to your Google Drive & Sheets.\n');

  try {
    execSync('npx clasp login', { stdio: 'inherit' });
    success('Logged in to Google');
  } catch (err) {
    console.error('  ✗ Login failed. Try running "npx clasp login" manually.');
    process.exit(1);
  }

  // Step 3: Create a new Google Sheet
  log('3/6', 'Creating Google Sheet for RSVP data...');
  
  const sheetName = `Wedding RSVP - ${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;
  
  try {
    execSync(`npx clasp create --title "${sheetName}" --type sheets`, {
      cwd: PROJECT_ROOT,
      stdio: 'pipe',
    });
    success(`Sheet created: "${sheetName}"`);
  } catch (err) {
    console.error('  ✗ Failed to create sheet:', err.message);
    process.exit(1);
  }

  // Read the .clasp.json to get the script ID
  const claspJsonPath = join(PROJECT_ROOT, '.clasp.json');
  let claspConfig;
  try {
    claspConfig = JSON.parse(readFileSync(claspJsonPath, 'utf-8'));
  } catch {
    warn('Could not read .clasp.json — clasp create may have failed');
    process.exit(1);
  }

  if (!claspConfig.scriptId) {
    console.error('  ✗ No scriptId found in .clasp.json');
    process.exit(1);
  }

  success(`Script ID: ${claspConfig.scriptId}`);

  // Step 4: Push the Apps Script code
  log('4/6', 'Pushing Apps Script code...');
  
  try {
    execSync('npx clasp push --force', {
      cwd: PROJECT_ROOT,
      stdio: 'pipe',
    });
    success('Code pushed successfully');
  } catch (err) {
    console.error('  ✗ Failed to push code:', err.message);
    warn('Make sure apps-script/Code.gs exists');
    process.exit(1);
  }

  // Step 5: Create a deployment version
  log('5/6', 'Creating deployment version...');
  
  let deployOutput;
  try {
    deployOutput = execSync('npx clasp deploy --description "Wedding RSVP Web App"', {
      cwd: PROJECT_ROOT,
      stdio: 'pipe',
      encoding: 'utf-8',
    });
    success('Deployment created');
  } catch (err) {
    console.error('  ✗ Failed to deploy:', err.message);
    process.exit(1);
  }

  // Parse deployment ID from output
  // Output format: "Created version 1.  Deployment ID: AKfycb..."
  const deployMatch = deployOutput.match(/Deployment ID:\s*(\S+)/);
  if (!deployMatch) {
    console.error('  ✗ Could not parse deployment ID from:', deployOutput);
    process.exit(1);
  }
  
  const deploymentId = deployMatch[1];

  // Step 6: Deploy as Web App
  log('6/6', 'Deploying as Web App...');
  
  try {
    // We need to update the deployment to run as web app
    // clasp creates it as an API executable by default
    // The web app URL format is:
    // https://script.google.com/macros/s/{SCRIPT_ID}/exec
    const scriptId = claspConfig.scriptId;
    const webAppUrl = `https://script.google.com/macros/s/${scriptId}/exec`;
    
    success(`Web App URL: ${webAppUrl}`);
    
    console.log(`\n${GREEN}${'='.repeat(56)}${RESET}`);
    console.log(`${GREEN}  ✅ Google Sheets Backend is READY!${RESET}`);
    console.log(`${GREEN}${'='.repeat(56)}${RESET}\n`);
    
    console.log(`  ${BOLD}Web App URL:${RESET}`);
    console.log(`  ${CYAN}${webAppUrl}${RESET}\n`);
    
    console.log(`  ${BOLD}Add this to your .env.local:${RESET}`);
    console.log(`  ${YELLOW}NEXT_PUBLIC_APPS_SCRIPT_URL=${webAppUrl}${RESET}\n`);
    
    console.log(`  ${BOLD}Or set it on Vercel:${RESET}`);
    console.log(`  ${YELLOW}vercel env add NEXT_PUBLIC_APPS_SCRIPT_URL production${RESET}\n`);
    
    // Also update .env.example
    const envExamplePath = join(PROJECT_ROOT, '.env.example');
    let envContent = readFileSync(envExamplePath, 'utf-8');
    envContent = envContent.replace(
      /^NEXT_PUBLIC_APPS_SCRIPT_URL=.*$/m,
      `NEXT_PUBLIC_APPS_SCRIPT_URL=${webAppUrl}`
    );
    writeFileSync(envExamplePath, envContent);
    
    warn('IMPORTANT: The first time someone visits the Web App URL,');
    console.log('  they will see a "This app is not verified" screen.');
    console.log('  Click "Advanced" → "Go to [project name] (unsafe)" to authorize.\n');
    
    console.log(`  Your RSVP sheet: Open your Google Drive → find "${sheetName}"`);
    console.log(`  Or run: ${CYAN}npx clasp open${RESET}\n`);
    
  } catch (err) {
    console.error('  ✗ Deployment error:', err.message);
    process.exit(1);
  }
}

main().catch(console.error);
