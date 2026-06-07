/**
 * Quick Google OAuth Device Flow — gets tokens without a browser redirect.
 * 
 * Usage: node scripts/oauth-device-flow.mjs
 * 
 * You'll see a URL and code — open the URL in any browser,
 * paste the code, authorize, and come back here.
 */

import { google } from 'googleapis';

const SCOPES = [
  'https://www.googleapis.com/auth/drive.file',
  'https://www.googleapis.com/auth/script.deployments',
  'https://www.googleapis.com/auth/script.projects',
  'https://www.googleapis.com/auth/script.webapp.deploy',
  'https://www.googleapis.com/auth/service.management',
  'https://www.googleapis.com/auth/logging.read',
  'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/cloud-platform',
];

async function main() {
  const oauth2Client = new google.auth.OAuth2({
    clientId: '1072944905499-vm2v2i5dvn0a0d2o4ca36i1vge8cvbn0.apps.googleusercontent.com',
    clientSecret: '', // Not needed for device flow
  });

  console.log('\n🔐 Requesting device code from Google...\n');

  const { device_code, user_code, verification_uri, expires_in, interval } =
    await oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES,
    }).then(() => {
      // Actually, googleapis doesn't directly support device flow like this.
      // Let me use the raw endpoint.
      throw new Error('Use direct API call instead');
    });
}

main().catch(console.error);
