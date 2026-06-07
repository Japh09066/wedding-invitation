import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://wedding-invitation-neon-kappa.vercel.app'),
  title: 'Jay Sam & Laarnie | Wedding Invitation',
  description:
    'Join us as we celebrate the beginning of our forever. Jay Sam & Laarnie — August 18, 2026.',
  openGraph: {
    title: 'Jay Sam & Laarnie | Wedding Invitation',
    description:
      'Join us as we celebrate the beginning of our forever. Jay Sam & Laarnie — August 18, 2026.',
    type: 'website',
    locale: 'en_PH',
    siteName: 'Jay Sam & Laarnie Wedding',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jay Sam & Laarnie Wedding',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jay Sam & Laarnie | Wedding Invitation',
    description:
      'Join us as we celebrate the beginning of our forever. Jay Sam & Laarnie — August 18, 2026.',
    images: ['/images/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-floral-bg text-floral-deep overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
