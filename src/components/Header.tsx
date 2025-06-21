'use client';

import { useAuth } from '../context/AuthProvider';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white py-4 px-6 flex justify-between items-center shadow-sm">
      <div className="flex items-center space-x-1 sm:space-x-2">
        <Image
          src="/KritiSystemsLogo.png"
          alt="Kriti Logo"
          width={48}
          height={48}
          className="rounded-full object-contain"
          priority
        />
        <span className="text-xl sm:text-2xl font-semibold text-gray-800">Kriti Systems</span>
      </div>
      <nav className="flex gap-6 text-gray-600 font-medium items-center">
        <Link href="/">Home</Link>
        <Link href="/tools">Tools</Link>
        <Link href="/about">About</Link>
        <Link href="/profile">Profile</Link>
        {!user ? (
          <Link href="/auth" className="bg-[#FF5722] hover:bg-[#E64A19] text-white px-4 py-2 rounded-md transition-colors">
            Login
          </Link>
        ) : (
          <button onClick={logout} className="text-[#FF5722] font-semibold hover:underline">
            Logout
          </button>
        )}
      </nav>
    </header>
  );
}
