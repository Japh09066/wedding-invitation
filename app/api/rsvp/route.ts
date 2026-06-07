import { NextRequest, NextResponse } from 'next/server';

interface RSVPBody {
  id: string;
  name: string;
  attendance: string;
  guests: number;
  message: string;
  submittedAt: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: RSVPBody = await request.json();

    // Validation
    if (!body.name || body.name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Name is required and must be at least 2 characters' },
        { status: 400 }
      );
    }

    if (!body.attendance || !['Yes', 'No'].includes(body.attendance)) {
      return NextResponse.json(
        { error: 'Attendance must be "Yes" or "No"' },
        { status: 400 }
      );
    }

    if (body.attendance === 'Yes' && (typeof body.guests !== 'number' || body.guests < 1 || body.guests > 10)) {
      return NextResponse.json(
        { error: 'Number of guests must be between 1 and 10' },
        { status: 400 }
      );
    }

    // Get Apps Script URL from environment
    const appsScriptUrl = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL;

    if (!appsScriptUrl || appsScriptUrl === 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec') {
      // Apps Script not configured — log and return success for dev
      console.log('[RSVP] Apps Script not configured. Payload:', body);
      return NextResponse.json({
        success: true,
        message: 'RSVP received (logging only — Apps Script URL not configured)',
        id: body.id,
      });
    }

    // Forward to Google Apps Script
    const response = await fetch(appsScriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => 'Unknown error');
      console.error('[RSVP] Apps Script error:', response.status, errorText);
      return NextResponse.json(
        { error: 'Failed to submit RSVP to Google Sheets' },
        { status: 502 }
      );
    }

    const result = await response.json().catch(() => ({}));

    return NextResponse.json({
      success: true,
      message: 'RSVP submitted successfully',
      id: body.id,
      ...result,
    });
  } catch (error) {
    console.error('[RSVP] Internal error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
