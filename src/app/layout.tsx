import { AuthProvider } from '@/context/AuthProvider';
import './globals.css';
import Header from '@/components/Header';

export const metadata = {
  title: 'Kriti Systems',
  description: 'Finance tools reimagined',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-white via-slate-100 to-gray-200 font-sans">
        <AuthProvider>
        <Header />
        {children}
        </AuthProvider>
      </body>
    </html>
  );
}
