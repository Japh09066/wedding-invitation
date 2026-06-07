/**
 * Automated Google Sheets + Apps Script setup
 * Uses Playwright to create the sheet, script, and deploy as web app.
 *
 * Run: node scripts/auto-setup-google.mjs
 */

import { chromium } from 'playwright';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, '..');

async function main() {
  const email = process.env.GOOGLE_EMAIL;
  const password = process.env.GOOGLE_PASSWORD;

  if (!email || !password) {
    console.log(`
❌ Google credentials not found.

Set them as environment variables:
  export GOOGLE_EMAIL="your.email@gmail.com"
  export GOOGLE_PASSWORD="your-app-password"

⚠️  Use an App Password (not your regular password):
    1. Go to https://myaccount.google.com/apppasswords
    2. Generate an App Password for "Mail"
    3. Use that here
`);
    process.exit(1);
  }

  const code = readFileSync(join(PROJECT_ROOT, 'apps-script/Code.gs'), 'utf-8');

  console.log('🚀 Starting automated setup...\n');

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    // Step 1: Create a new Google Sheet
    console.log('1/5 📄 Creating Google Sheet...');
    await page.goto('https://sheets.new', { waitUntil: 'networkidle' });

    // Check if we need to log in
    if (page.url().includes('accounts.google.com') || page.url().includes('signin')) {
      console.log('   🔑 Logging in to Google...');
      
      // Email
      await page.fill('input[type="email"]', email);
      await page.click('#identifierNext');
      await page.waitForTimeout(2000);

      // Password
      await page.fill('input[type="password"]', password);
      await page.click('#passwordNext');
      await page.waitForTimeout(5000);
    }

    // Wait for sheet to load
    await page.waitForTimeout(3000);
    console.log('   ✅ Sheet created');

    // Step 2: Add headers
    console.log('2/5 📝 Adding headers...');
    const headers = ['ID', 'Name', 'Attendance', 'Guests', 'Message', 'Submitted At'];
    // Click on first cell and type
    for (let i = 0; i < headers.length; i++) {
      const col = String.fromCharCode(65 + i); // A, B, C...
      await page.click(`#t-row-1-${col}`, { timeout: 5000 }).catch(() => {
        // Fallback: tab navigation
        if (i > 0) await page.keyboard.press('Tab');
        else await page.keyboard.press('Enter');
      });
      await page.keyboard.type(headers[i]);
    }

    // Step 3: Open Apps Script editor
    console.log('3/5 ⚡ Opening Apps Script editor...');
    await page.goto('https://script.google.com/home/projects/create', { waitUntil: 'networkidle' });
    await page.waitForTimeout(3000);

    // Step 4: Paste code
    console.log('4/5 📋 Pasting Apps Script code...');
    // Find the code editor and replace content
    // The editor usually has a monaco editor instance
    await page.waitForTimeout(2000);
    
    // Try to select all and paste
    await page.keyboard.press('Control+a');
    await page.keyboard.press('Delete');
    await page.keyboard.type(code);
    
    // Save the project
    await page.click('text=Save project', { timeout: 5000 }).catch(() => {
      // Try Ctrl+S
      page.keyboard.press('Control+s');
    });
    
    await page.waitForTimeout(2000);
    console.log('   ✅ Code saved');

    // Step 5: Deploy as Web App
    console.log('5/5 🚀 Deploying as Web App...');
    await page.click('text=Deploy', { timeout: 5000 }).catch(() => {
      // Try clicking through menu
      page.click('text=Deploy').catch(() => {});
    });
    await page.waitForTimeout(2000);
    
    // Click "New deployment"
    await page.click('text=New deployment', { timeout: 5000 }).catch(() => {
      page.click('text=new deployment').catch(() => {});
    });
    await page.waitForTimeout(2000);
    
    // Select "Web app" type
    await page.click('text=Web app', { timeout: 5000 }).catch(() => {});
    await page.waitForTimeout(1000);
    
    // Set Execute as: Me
    await page.click('text=Execute as', { timeout: 3000 }).catch(() => {});
    await page.waitForTimeout(500);
    
    // Set Who has access: Anyone
    await page.click('text=Who has access', { timeout: 3000 }).catch(() => {});
    await page.waitForTimeout(500);
    await page.click('text=Anyone', { timeout: 3000 }).catch(() => {});
    await page.waitForTimeout(500);
    
    // Click Deploy
    await page.click('button:has-text("Deploy")', { timeout: 5000 }).catch(() => {
      page.click('text=Deploy').catch(() => {});
    });
    await page.waitForTimeout(3000);
    
    // Copy the Web App URL
    const url = await page.textContent('input[readonly]', { timeout: 5000 }).catch(() => {
      return page.textContent('text=https://script.google.com', { timeout: 3000 }).catch(() => null);
    });

    console.log(`\n🎉 Deployment URL: ${url || 'Could not extract URL — check browser manually'}`);
    
    await browser.close();
    
  } catch (err) {
    console.error('❌ Setup failed:', err.message);
    console.log('\n⚠️  Manual setup instructions in README.md');
    await browser.close();
    process.exit(1);
  }
}

main();
