# 💍 Wedding Invitation Website

A premium, animated wedding invitation website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

Inspired by printedbystaygold.com — features an envelope opening experience, countdown timer, story timeline, photo gallery with lightbox, and full RSVP system backed by Google Sheets.

## ✨ Features

- ✉️ **Envelope Landing** — Animated envelope opening experience with invitation card reveal
- 🌸 **Hero Section** — Elegant floral design with couple names and wedding date
- ⏱ **Countdown Timer** — Live countdown (days, hours, minutes, seconds)
- 📖 **Our Story** — Animated timeline of relationship milestones
- 📍 **Event Details** — Ceremony & reception info with Google Maps integration
- 🖼 **Photo Gallery** — Responsive grid with lightbox viewer
- 📋 **RSVP System** — Full form with validation, guest count, and personal message
- 🎊 **Confetti** — Celebration animation on successful RSVP
- 🎵 **Background Music** — Toggle control for romantic soundtrack
- 📱 **Fully Responsive** — Looks perfect on mobile and desktop
- 🚀 **Vercel Ready** — Deploy with zero configuration

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Confetti:** canvas-confetti
- **Backend:** Next.js API Routes + Google Apps Script + Google Sheets
- **Deployment:** Vercel

## 📁 Project Structure

```
wedding-invitation/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main page — orchestrates all sections
│   ├── globals.css         # Global styles, Tailwind, custom utilities
│   ├── api/
│   │   └── rsvp/
│   │       └── route.ts    # RSVP submission API route
│   ├── components/
│   │   ├── EnvelopeLanding.tsx   # Animated envelope opener
│   │   ├── Navigation.tsx        # Sticky nav with scroll indicator
│   │   ├── HeroSection.tsx       # Main hero with floral design
│   │   ├── CountdownTimer.tsx    # Live countdown
│   │   ├── OurStory.tsx          # Timeline story section
│   │   ├── EventDetails.tsx      # Venue info with maps
│   │   ├── PhotoGallery.tsx      # Responsive gallery + lightbox
│   │   ├── RSVPForm.tsx          # Full RSVP form with validation
│   │   ├── FloatingRSVP.tsx      # Floating RSVP CTA button
│   │   ├── MusicToggle.tsx       # Background music control
│   │   ├── Confetti.tsx          # Confetti celebration effect
│   │   └── Footer.tsx            # Elegant footer
│   ├── hooks/
│   │   └── useCountdown.ts       # Countdown timer hook
│   └── lib/
│       └── utils.ts              # Utility functions
├── public/
│   ├── images/           # Place your photos here
│   └── music/            # Place background music here
├── vercel.json           # Vercel deployment config
├── next.config.js        # Next.js config
├── tailwind.config.js    # Tailwind theme customization
├── .env.example          # Environment variables template
└── README.md
```

## 🚀 Quick Start

### 1. Clone and Install

```bash
git clone <your-repo-url> wedding-invitation
cd wedding-invitation
npm install
```

### 2. Configure Environment

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your details:

```env
# Wedding date (ISO format with timezone)
NEXT_PUBLIC_WEDDING_DATE=2026-03-31T14:00:00+08:00

# Couple names
NEXT_PUBLIC_COUPLE_NAME=Cindy & Keys

# Google Maps embed URL for venue location
NEXT_PUBLIC_MAPS_URL=https://www.google.com/maps/embed?pb=!1m18!...

# Background music URL (place your file in public/music/)
NEXT_PUBLIC_MUSIC_URL=/music/wedding-song.mp3

# Google Apps Script URL for RSVP submissions (see setup below)
NEXT_PUBLIC_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

### 3. Add Your Photos

Place your couple photos in `public/images/`. The gallery uses placeholder gradients by default — replace with your actual images.

### 4. Add Background Music

Place an audio file (MP3 recommended) in `public/music/` and update the env variable.

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 6. Build for Production

```bash
npm run build
npm start
```

## 🔧 Google Apps Script Setup (RSVP Backend)

The RSVP form writes to Google Sheets through a Google Apps Script web app.

### Step 1: Create a Google Sheet

1. Go to [sheets.new](https://sheets.new)
2. Rename the sheet to "Wedding RSVP" (or whatever you prefer)
3. Add these headers in Row 1:
   - `ID` | `Name` | `Attendance` | `Guests` | `Message` | `Submitted At`

### Step 2: Create the Apps Script

1. In your sheet, go to **Extensions → Apps Script**
2. Delete the default code and paste:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.id || '',
      data.name || '',
      data.attendance || '',
      data.guests || 0,
      data.message || '',
      data.submittedAt || new Date().toISOString()
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Save the project (Ctrl+S / Cmd+S)
4. Click **Deploy → New deployment**
5. Choose **Web app**
6. Set **Execute as:** "Me"
7. Set **Who has access:** "Anyone"
8. Click **Deploy**
9. **Copy the Web app URL** — this goes in your `.env.local` as `NEXT_PUBLIC_APPS_SCRIPT_URL`

> ⚠️ **Important:** Google Apps Script may return a 302 redirect response. The client-side `no-cors` mode handles this transparently.

## 🚢 Deploy to Vercel

### One-click deploy (recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/wedding-invitation)

### Manual deployment

1. Push your code to a GitHub/GitLab/Bitbucket repository
2. Go to [vercel.com](https://vercel.com) and click **Add New → Project**
3. Import your repository
4. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_WEDDING_DATE`
   - `NEXT_PUBLIC_COUPLE_NAME`
   - `NEXT_PUBLIC_MAPS_URL`
   - `NEXT_PUBLIC_MUSIC_URL`
   - `NEXT_PUBLIC_APPS_SCRIPT_URL`
5. Click **Deploy**
6. Vercel auto-detects Next.js — no additional config needed

### Environment Variables on Vercel

Navigate to **Project Settings → Environment Variables** and add:

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_WEDDING_DATE` | `2026-03-31T14:00:00+08:00` |
| `NEXT_PUBLIC_COUPLE_NAME` | `Cindy & Keys` |
| `NEXT_PUBLIC_MAPS_URL` | Your Google Maps embed URL |
| `NEXT_PUBLIC_MUSIC_URL` | `/music/wedding-song.mp3` |
| `NEXT_PUBLIC_APPS_SCRIPT_URL` | Your Apps Script web app URL |

## 🎨 Customization

### Color Palette

Edit `tailwind.config.js` under `theme.extend.colors.floral`:

- `bg` — Page background
- `cream` — Card/container backgrounds
- `blush` — Pink floral accents
- `sage` — Green botanical accents
- `taupe` — Secondary text and decorative elements
- `gold` — Primary accent color
- `deep` — Primary text color

### Typography

The site uses three font families (loaded from Google Fonts):
- **Cormorant Garamond** (`font-serif`) — Headings and elegant text
- **Dancing Script** (`font-script`) — Decorative script text
- **Montserrat** (`font-sans`) — UI elements and small text

### Content

Update the text content in each component to match your wedding details:
- `page.tsx` — Couple names and date
- `HeroSection.tsx` — Hero text
- `OurStory.tsx` — Relationship milestones
- `EventDetails.tsx` — Venue and schedule
- `PhotoGallery.tsx` — Gallery images and labels

## 📸 License

All rights reserved. This project is for personal wedding invitation use.

---

Built with ❤️ for Cindy & Keys | March 31, 2026
