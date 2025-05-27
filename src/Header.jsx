import React from 'react';

export default function Header() {
  return (
    <header className="p-4 bg-white shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-900">Kriti Systems</h1>
      <nav className="flex space-x-6">
        <a href="#home" className="text-blue-600 hover:underline">Home</a>
        <a href="#calculators" className="text-blue-600 hover:underline">Calculators</a>
        <a href="#about" className="text-blue-600 hover:underline">About</a>
        <a href="#contact" className="text-blue-600 hover:underline">Contact</a>
      </nav>
    </header>
  );
}
