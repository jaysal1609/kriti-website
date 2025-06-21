'use client';

import React, { useState } from 'react';
import JsonLd from '@/components/JsonLd';

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

  // Calculator structured data
  const calculatorStructuredData = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": "EMI Calculator",
    "description": "Calculate your loan EMI easily with our free EMI calculator.",
    "provider": {
      "@type": "Organization",
      "name": "Kriti Systems",
      "url": "https://kritisystems.com"
    },
    "feesAndCommissionsSpecification": "Free to use",
    "url": "https://kritisystems.com/tools/emi"
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 max-w-md mx-auto mt-10">
      <JsonLd data={calculatorStructuredData} />
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
        {/*<button
          onClick={calculateEMI}
          style={{
            width: '100%',
            backgroundColor: '#F2BD4D',
            color: 'white',
            padding: '0.5rem 0',
            borderRadius: '0.25rem',
            fontWeight: '500',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#E0A922'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#F2BD4D'}
        >
          Calculate EMI
        </button>*/}
        <button
          onClick={calculateEMI}
          className="w-full bg-[#FF5722] text-white py-2 rounded hover:bg-[#E64A19] transition-colors"
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
