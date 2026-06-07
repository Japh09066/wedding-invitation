import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://cindyandkeys.vercel.app'),
  title: 'Cindy & Keys | Wedding Invitation',
  description:
    'Join us as we celebrate the beginning of our forever. Cindy & Keys — March 31, 2026.',
  openGraph: {
    title: 'Cindy & Keys | Wedding Invitation',
    description:
      'Join us as we celebrate the beginning of our forever. Cindy & Keys — March 31, 2026.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Cindy & Keys Wedding',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cindy & Keys Wedding',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cindy & Keys | Wedding Invitation',
    description:
      'Join us as we celebrate the beginning of our forever. Cindy & Keys — March 31, 2026.',
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
