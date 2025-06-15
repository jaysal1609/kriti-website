'use client';

import React, { useState } from 'react';

export default function EMICalculator() {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [emi, setEmi] = useState<number | null>(null);

  const calculateEMI = () => {
    const P = parseFloat(principal);
    const R = parseFloat(rate) / 12 / 100;
    const N = parseFloat(tenure);

    if (isNaN(P) || isNaN(R) || isNaN(N)) {
      setEmi(null);
      return;
    }

    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    setEmi(Math.round(emi));
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">EMI Calculator</h2>
      <div className="space-y-4">
        <input
          type="number"
          placeholder="Principal (₹)"
          className="w-full p-2 border border-gray-300 rounded"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
        <input
          type="number"
          placeholder="Annual Interest Rate (%)"
          className="w-full p-2 border border-gray-300 rounded"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
        <input
          type="number"
          placeholder="Tenure (in months)"
          className="w-full p-2 border border-gray-300 rounded"
          value={tenure}
          onChange={(e) => setTenure(e.target.value)}
        />
        <button
          onClick={calculateEMI}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-medium transition"
        >
          Calculate EMI
        </button>
        {emi !== null && (
          <div className="mt-4 text-lg text-green-600">
            Your monthly EMI is ₹{emi.toLocaleString()}
          </div>
        )}
      </div>
    </div>
  );
}
