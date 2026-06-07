/**
 * Wedding RSVP — Google Apps Script Web App
 * 
 * Deploy this as a Web App to receive RSVP submissions
 * from your wedding invitation website.
 * 
 * Sheet columns (Row 1 — headers):
 *   ID | Name | Attendance | Guests | Message | Submitted At
 */

// POST handler — receives RSVP data from the website
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Ensure headers exist
    const headers = ['ID', 'Name', 'Attendance', 'Guests', 'Message', 'Submitted At'];
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      sheet.setFrozenRows(1);
    }

    // Parse incoming data
    let data;
    if (e && e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else {
      return createResponse({ success: false, error: 'No data received' }, 400);
    }

    // Validate
    if (!data.name || data.name.trim().length < 2) {
      return createResponse({ success: false, error: 'Name is required' }, 400);
    }

    if (!['Yes', 'No'].includes(data.attendance)) {
      return createResponse({ success: false, error: 'Invalid attendance value' }, 400);
    }

    // Append row
    sheet.appendRow([
      data.id || generateId(),
      data.name.trim(),
      data.attendance,
      data.attendance === 'Yes' ? (data.guests || 1) : 0,
      data.message || '',
      data.submittedAt || new Date().toISOString(),
    ]);

    return createResponse({ success: true, message: 'RSVP recorded' });
  } catch (error) {
    console.error('Error processing RSVP:', error);
    return createResponse({ success: false, error: error.toString() }, 500);
  }
}

// GET handler — health check
function doGet(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const count = Math.max(0, sheet.getLastRow() - 1); // minus header
  
  return createResponse({
    status: 'ok',
    totalRsvps: count,
    timestamp: new Date().toISOString(),
  });
}

// Helper: create JSON response
function createResponse(data, statusCode = 200) {
  const output = ContentService.createTextOutput(JSON.stringify(data));
  output.setMimeType(ContentService.MimeType.JSON);
  
  if (statusCode !== 200) {
    // For errors, we can't set custom status codes in Apps Script Web App
    // But we return the error in the body
  }
  
  return output;
}

// Helper: generate a unique ID
function generateId() {
  const timestamp = new Date().getTime().toString(36);
  const random = Math.random().toString(36).substring(2, 8);
  return `RSVP-${timestamp}-${random}`.toUpperCase();
}

// Optional: Menu item for manual entry
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Wedding RSVP')
    .addItem('View Dashboard', 'showDashboard')
    .addSeparator()
    .addItem('Export as CSV', 'exportCSV')
    .addToUi();
}

function showDashboard() {
  const html = HtmlService.createHtmlOutput(`
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Georgia, serif; padding: 20px; background: #faf6f0; }
        h1 { color: #5a4a3a; font-size: 24px; }
        .stat { background: white; padding: 16px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin: 10px 0; }
        .number { font-size: 32px; color: #d4a373; }
        .label { font-size: 12px; color: #8b7a6a; text-transform: uppercase; letter-spacing: 1px; }
      </style>
    </head>
    <body>
      <h1>💍 Wedding RSVP Dashboard</h1>
      <div class="stat">
        <div class="number">${getRSVPStats().total}</div>
        <div class="label">Total Responses</div>
      </div>
      <div class="stat">
        <div class="number">${getRSVPStats().attending}</div>
        <div class="label">Attending</div>
      </div>
      <div class="stat">
        <div class="number">${getRSVPStats().declined}</div>
        <div class="label">Declined</div>
      </div>
      <div class="stat">
        <div class="number">${getRSVPStats().totalGuests}</div>
        <div class="label">Total Guests</div>
      </div>
      <p style="margin-top:20px;color:#8b7a6a;font-style:italic;">
        Refresh the page to update stats
      </p>
    </body>
    </html>
  `)
    .setWidth(350)
    .setHeight(400);
  
  SpreadsheetApp.getUi().showModalDialog(html, 'RSVP Dashboard');
}

function getRSVPStats() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();
  
  if (data.length <= 1) return { total: 0, attending: 0, declined: 0, totalGuests: 0 };
  
  const rows = data.slice(1); // skip header
  const stats = {
    total: rows.length,
    attending: rows.filter(r => r[2] === 'Yes').length,
    declined: rows.filter(r => r[2] === 'No').length,
    totalGuests: rows.filter(r => r[2] === 'Yes').reduce((sum, r) => sum + (Number(r[3]) || 0), 0),
  };
  
  return stats;
}

function exportCSV() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();
  
  if (data.length === 0) return;
  
  const csv = data.map(row => row.map(cell => {
    if (typeof cell === 'string' && (cell.includes(',') || cell.includes('"') || cell.includes('\n'))) {
      return '"' + cell.replace(/"/g, '""') + '"';
    }
    return cell;
  }).join(',')).join('\n');
  
  const blob = Utilities.newBlob(csv, 'text/csv', `wedding-rsvp-${new Date().toISOString().split('T')[0]}.csv`);
  const url = DriveApp.createFile(blob).getUrl();
  
  SpreadsheetApp.getUi().alert('CSV exported!\n\nDownload: ' + url);
}
