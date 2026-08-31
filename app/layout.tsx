import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://yusufsahin99.github.io'),
  title: 'Yusuf Sahin · Computer Vision Researcher',
  description:
    'Yusuf Sahin is a PhD student at the University of Bern working on structured and efficient representation learning for generative models across vision and language.',
  openGraph: {
    title: 'Yusuf Sahin · Computer Vision Researcher',
    description:
      'Structured and efficient representation learning for generative models across vision and language.',
    type: 'website',
    url: '/',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Yusuf Sahin — Structured and Efficient Representation Learning',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yusuf Sahin · Computer Vision Researcher',
    description:
      'Structured and efficient representation learning for generative models across vision and language.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="b6ac0608-abe4-422c-b7c4-1950dbd91bcd"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
