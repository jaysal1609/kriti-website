'use client';

import { useAuth } from '@/context/AuthProvider';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white py-4 px-6 flex justify-between items-center shadow-sm">
      <div className="flex items-center space-x-1 sm:space-x-2">
        <img src="/KritiSystemsLogo.png" alt="Kriti Logo" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-contain"/>
        <span className="text-xl sm:text-2xl font-semibold text-gray-800">Kriti Systems</span>
      </div>
      <nav className="flex gap-6 text-gray-600 font-medium items-center">
        <Link href="/">Home</Link>
        <Link href="/tools">Tools</Link>
        <Link href="/about">About</Link>
        <Link href="/profile">Profile</Link>
        {!user ? (
          <Link href="/auth">Login</Link>
        ) : (
          <button onClick={logout} className="text-orange-500 font-semibold hover:underline">
            Logout
          </button>
        )}
      </nav>
    </header>
  );
}