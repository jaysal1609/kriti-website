import { Metadata } from 'next';

export const baseMetadata: Metadata = {
  title: {
    default: 'Kriti Systems | Finance Tools Reimagined',
    template: '%s | Kriti Systems'
  },
  description: 'Explore India\'s smartest financial calculators and get free updates from leading financial institutions.',
  keywords: ['financial tools', 'EMI calculator', 'SIP calculator', 'loan comparison', 'India finance'],
  authors: [{ name: 'Kriti Systems' }],
  creator: 'Kriti Systems',
  publisher: 'Kriti Systems',
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL('https://kritisystems.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://kritisystems.com',
    siteName: 'Kriti Systems',
    title: 'Kriti Systems | Finance Tools Reimagined',
    description: 'Explore India\'s smartest financial calculators and get free updates from leading financial institutions.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kriti Systems - Finance Tools Reimagined',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kriti Systems | Finance Tools Reimagined',
    description: 'Explore India\'s smartest financial calculators and get free updates from leading financial institutions.',
    images: ['/og-image.jpg'],
    creator: '@kritisystems',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

/**
 * Generate page-specific metadata
 * @param title Page title
 * @param description Page description (optional)
 * @returns Metadata object
 */
export function getPageMetadata(title: string, description?: string): Metadata {
  return {
    ...baseMetadata,
    title,
    description: description || baseMetadata.description,
    alternates: {
      canonical: '/',
    },
    openGraph: {
      ...baseMetadata.openGraph,
      title,
      description: description || baseMetadata.description as string,
    },
    twitter: {
      ...baseMetadata.twitter,
      title,
      description: description || baseMetadata.description as string,
    },
  };
}
