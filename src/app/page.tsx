'use client';

import { useAuth } from '../context/AuthProvider';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import JsonLd from '@/components/JsonLd';

interface NewsItem {
  title: string;
  source: string;
  link: string;
  pubDate: string; // Added pubDate property
}

export default function HomePage() {
  const { user } = useAuth();

  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
  const fetchNews = async () => {
    try {
      const res = await fetch('/api/news');
      const data = await res.json();
      if (!Array.isArray(data)) {
        console.error('API did not return an array:', data);
        return;
      }
      setNews(data);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };
  fetchNews();
  }, []);


  // Organization structured data
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Kriti Systems",
    "url": "https://kritisystems.com",
    "logo": "https://kritisystems.com/KritiSystemsLogo.png",
    "description": "Explore India's smartest financial calculators and get free updates from leading financial institutions.",
    "sameAs": [
      "https://twitter.com/kritisystems",
      "https://www.linkedin.com/company/kritisystems",
      "https://www.facebook.com/kritisystems"
    ]
  };

  // Website structured data
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Kriti Systems",
    "url": "https://kritisystems.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://kritisystems.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-100 px-6 py-16">
      <JsonLd data={organizationStructuredData} />
      <JsonLd data={websiteStructuredData} />
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Welcome {user?.user_metadata?.name ?? user?.email ?? 'to Kriti Systems'}
        </h1>
        <p className="text-gray-600 text-lg mb-10">
          Explore India&#39;s smartest financial calculators and get free updates from leading financial institutions.
        </p>
        
  
        <div className="grid gap-6 md:grid-cols-3 mb-14">
          <Link
            href="/tools"
            className="p-6 bg-white border rounded-lg text-left"
          >
            <h2 className="text-xl font-semibold text-[#FF5722] mb-2">🧮 Tools</h2>
            <p className="text-sm text-gray-600">Explore EMI, SIP, Loan comparison & more.</p>
          </Link>
          <Link
            href="/profile"
            className="p-6 bg-white border rounded-lg text-left"
          >
            <h2 className="text-xl font-semibold text-[#FF5722] mb-2">👤 Profile</h2>
            <p className="text-sm text-gray-600">Manage your personal financial data.</p>
          </Link>
          <Link
            href="/about"
            className="p-6 bg-white border rounded-lg text-left"
          >
            <h2 className="text-xl font-semibold text-[#FF5722] mb-2">📘 About</h2>
            <p className="text-sm text-gray-600">Learn about our mission and upcoming features.</p>
          </Link>
        </div>

        <div className="text-left max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">📢 Latest Financial Updates</h3>
          <ul className="space-y-4">
            {news.map((item, i) => (
              <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="block p-4 bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow mb-2">
                <h3 className="font-medium text-[#1A365D]">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {item.source} {item.pubDate ? `— ${new Date(item.pubDate).toLocaleString()}` : ''}
                </p>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
