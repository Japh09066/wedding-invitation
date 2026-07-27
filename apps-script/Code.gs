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
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Ensure headers exist
    var headers = ['ID', 'Name', 'Attendance', 'Guests', 'Message', 'Submitted At'];
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      sheet.setFrozenRows(1);
    }

    // Parse incoming data
    var data;
    if (e && e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else {
      return createResponse({ success: false, error: 'No data received' });
    }

    // Validate
    if (!data.name || data.name.trim().length < 2) {
      return createResponse({ success: false, error: 'Name is required' });
    }

    if (['Yes', 'No'].indexOf(data.attendance) === -1) {
      return createResponse({ success: false, error: 'Invalid attendance value' });
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
    console.error('Error processing RSVP: ' + error.toString());
    return createResponse({ success: false, error: error.toString() });
  }
}

// GET handler — health check + timestamp conversion
function doGet(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Convert existing UTC timestamps to PH time
  if (e && e.parameter && e.parameter.action === 'convertTimes') {
    return convertTimestampsToPH(sheet);
  }
  
  var count = Math.max(0, sheet.getLastRow() - 1);
  
  return createResponse({
    status: 'ok',
    totalRsvps: count,
    timestamp: new Date().toISOString(),
  });
}

// Convert all timestamps in column F from UTC to PH time (+08:00)
function convertTimestampsToPH(sheet) {
  var lastRow = sheet.getLastRow();
  if (lastRow <= 1) {
    return createResponse({ success: true, converted: 0, message: 'No data rows to convert' });
  }
  
  var range = sheet.getRange(2, 6, lastRow - 1, 1); // Column F, skip header
  var values = range.getValues();
  var converted = 0;
  
  for (var i = 0; i < values.length; i++) {
    var val = values[i][0];
    if (typeof val === 'string' && val.indexOf('+08:00') === -1) {
      // Convert from UTC ISO to PH time
      var d = new Date(val);
      if (!isNaN(d.getTime())) {
        var phOffset = 8 * 60; // UTC+8
        var phTime = new Date(d.getTime() + (d.getTimezoneOffset() + phOffset) * 60000);
        var iso = phTime.toISOString().replace('Z', '+08:00');
        values[i][0] = iso;
        converted++;
      }
    }
  }
  
  range.setValues(values);
  
  return createResponse({
    success: true,
    converted: converted,
    message: 'Converted ' + converted + ' timestamp(s) to Philippine Time',
  });
}

// Helper: create JSON response
function createResponse(data) {
  var output = ContentService.createTextOutput(JSON.stringify(data));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}

// Helper: generate a unique ID
function generateId() {
  var timestamp = new Date().getTime().toString(36);
  var random = Math.random().toString(36).substring(2, 8);
  return 'RSVP-' + timestamp + '-' + random;
}

// Optional: Menu item for dashboard
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Wedding RSVP')
    .addItem('View Dashboard', 'showDashboard')
    .addSeparator()
    .addItem('Export as CSV', 'exportCSV')
    .addToUi();
}

// Show a dashboard with RSVP stats
function showDashboard() {
  var stats = getRSVPStats();
  var html = '<!DOCTYPE html><html><head>' +
    '<style>' +
    'body{font-family:Georgia,serif;padding:20px;background:#faf6f0}' +
    'h1{color:#5a4a3a;font-size:24px}' +
    '.stat{background:white;padding:16px;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,0.1);margin:10px 0}' +
    '.number{font-size:32px;color:#d4a373}' +
    '.label{font-size:12px;color:#8b7a6a;text-transform:uppercase;letter-spacing:1px}' +
    '</style></head><body>' +
    '<h1>Wedding RSVP Dashboard</h1>' +
    '<div class="stat"><div class="number">' + stats.total + '</div><div class="label">Total Responses</div></div>' +
    '<div class="stat"><div class="number">' + stats.attending + '</div><div class="label">Attending</div></div>' +
    '<div class="stat"><div class="number">' + stats.declined + '</div><div class="label">Declined</div></div>' +
    '<div class="stat"><div class="number">' + stats.totalGuests + '</div><div class="label">Total Guests</div></div>' +
    '<p style="margin-top:20px;color:#8b7a6a;font-style:italic;">Refresh to update stats</p>' +
    '</body></html>';

  var output = HtmlService.createHtmlOutput(html)
    .setWidth(350)
    .setHeight(400);
  
  SpreadsheetApp.getUi().showModalDialog(output, 'RSVP Dashboard');
}

function getRSVPStats() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  
  if (data.length <= 1) {
    return { total: 0, attending: 0, declined: 0, totalGuests: 0 };
  }
  
  var rows = data.slice(1); // skip header
  var total = rows.length;
  var attending = 0;
  var declined = 0;
  var totalGuests = 0;
  
  for (var i = 0; i < rows.length; i++) {
    if (rows[i][2] === 'Yes') {
      attending++;
      totalGuests += Number(rows[i][3]) || 0;
    } else if (rows[i][2] === 'No') {
      declined++;
    }
  }
  
  return {
    total: total,
    attending: attending,
    declined: declined,
    totalGuests: totalGuests,
  };
}

// Export all RSVP data as CSV
function exportCSV() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  
  if (data.length === 0) return;
  
  var csvLines = [];
  for (var r = 0; r < data.length; r++) {
    var row = data[r];
    var cells = [];
    for (var c = 0; c < row.length; c++) {
      var cell = row[c];
      if (typeof cell === 'string' && (cell.indexOf(',') !== -1 || cell.indexOf('"') !== -1 || cell.indexOf('\n') !== -1)) {
        cells.push('"' + cell.replace(/"/g, '""') + '"');
      } else {
        cells.push(cell);
      }
    }
    csvLines.push(cells.join(','));
  }
  var csv = csvLines.join('\n');
  
  var blob = Utilities.newBlob(csv, 'text/csv', 'wedding-rsvp-' + new Date().toISOString().split('T')[0] + '.csv');
  var url = DriveApp.createFile(blob).getUrl();
  
  SpreadsheetApp.getUi().alert('CSV exported!\n\nDownload: ' + url);
}
