'use client';

// Update the path below if your AuthProvider is located elsewhere, e.g. '../../context/AuthProvider'
import { useAuth } from '../context/AuthProvider'; // <-- Update this path as needed, e.g. '../context/AuthProvider' or with the correct file extension
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface NewsItem {
  title: string;
  source: string;
  link: string;
}

export default function HomePage() {
  const { user } = useAuth();
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    // Simulated financial news (replace with real API later)
    setNews([
      {
        title: 'RBI holds repo rate at 6.5% amid inflation concerns',
        source: 'RBI',
        link: 'https://rbi.org.in/',
      },
      {
        title: 'SEBI proposes tighter IPO disclosure norms',
        source: 'SEBI',
        link: 'https://www.sebi.gov.in/',
      },
      {
        title: 'India’s GDP growth forecast revised to 7.2%',
        source: 'ET Markets',
        link: 'https://economictimes.indiatimes.com/',
      },
    ]);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-100 px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          🚀 Welcome {user?.user_metadata?.name ?? user?.email ?? 'to Kriti Systems'}
        </h1>
        <p className="text-gray-600 text-lg mb-10">
          Explore India’s smartest financial calculators and get free updates from leading financial institutions.
        </p>

        <div className="grid gap-6 md:grid-cols-3 mb-14">
          <Link
            href="/tools"
            className="p-6 bg-white rounded-xl shadow hover:shadow-md transition text-left"
          >
            <h2 className="text-xl font-semibold text-orange-600 mb-2">🧮 Tools</h2>
            <p className="text-sm text-gray-600">Explore EMI, SIP, Loan comparison & more.</p>
          </Link>
          <Link
            href="/profile"
            className="p-6 bg-white rounded-xl shadow hover:shadow-md transition text-left"
          >
            <h2 className="text-xl font-semibold text-orange-600 mb-2">👤 Profile</h2>
            <p className="text-sm text-gray-600">Manage your personal financial data.</p>
          </Link>
          <Link
            href="/about"
            className="p-6 bg-white rounded-xl shadow hover:shadow-md transition text-left"
          >
            <h2 className="text-xl font-semibold text-orange-600 mb-2">📘 About</h2>
            <p className="text-sm text-gray-600">Learn about our mission and upcoming features.</p>
          </Link>
        </div>

        <div className="text-left max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">📢 Latest Financial Updates</h3>
          <ul className="space-y-4">
            {news.map((item, index) => (
              <li key={index} className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 font-medium hover:text-orange-600"
                >
                  {item.title}
                </a>
                <p className="text-sm text-gray-500 mt-1">Source: {item.source}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
