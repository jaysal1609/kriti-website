'use client';

import { useAuth } from '@/context/AuthProvider';

export default function HomePage() {
  const { user } = useAuth();

  return (
    <main className="min-h-screen flex items-center justify-center text-center px-4">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          🚀 Welcome {user?.email ? user.email : 'to Kriti Systems'}
        </h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Your go-to platform for smart financial tools, calculators, and innovation.
        </p>
      </div>
    </main>
  );
}