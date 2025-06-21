// import { AuthProvider } from '@/context/AuthProvider';
import { AuthProvider } from '@/context/AuthProvider';
import './globals.css';
import Header from '@/components/Header';

export const metadata = {
  title: 'Kriti Systems | Finance Tools Reimagined',
  description: 'Explore India\'s smartest financial calculators and get free updates from leading financial institutions.',
  keywords: 'financial tools, EMI calculator, SIP calculator, loan comparison, India finance',
  openGraph: {
    title: 'Kriti Systems | Finance Tools Reimagined',
    description: 'Explore India\'s smartest financial calculators and get free updates from leading financial institutions.',
    url: 'https://kritisystems.com',
    siteName: 'Kriti Systems',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kriti Systems - Finance Tools Reimagined',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kriti Systems | Finance Tools Reimagined',
    description: 'Explore India\'s smartest financial calculators and get free updates from leading financial institutions.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // You can change this value to support theming or gradients
  const bodyClassName = "bg-white font-sans";
  // Example for gradient: const bodyClassName = "bg-gradient-to-br from-white via-slate-100 to-gray-200 font-sans";

  return (
    <html lang="en">
      <head>
        {/* Custom fonts and icons are now loaded in _document.tsx */}
      </head>
      <body className={bodyClassName}>
        <AuthProvider>
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
