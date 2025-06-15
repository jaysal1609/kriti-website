"use client";

import { useState } from "react";

export default function SipCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [annualRate, setAnnualRate] = useState(12);
  const [investmentYears, setInvestmentYears] = useState(10);
  const [futureValue, setFutureValue] = useState<number | null>(null);

  const calculateSIP = () => {
    const P = monthlyInvestment;
    const r = annualRate / 12 / 100;
    const n = investmentYears * 12;

    const FV = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    setFutureValue(Math.round(FV));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-100 px-6 py-12">
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">📈 SIP Calculator</h1>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Monthly Investment (₹)</label>
            <input
              type="number"
              className="w-full mt-1 px-4 py-2 border rounded-lg"
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
              min={0}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Expected Annual Return (%)</label>
            <input
              type="number"
              className="w-full mt-1 px-4 py-2 border rounded-lg"
              value={annualRate}
              onChange={(e) => setAnnualRate(Number(e.target.value))}
              min={0}
              step="0.1"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Investment Duration (Years)</label>
            <input
              type="number"
              className="w-full mt-1 px-4 py-2 border rounded-lg"
              value={investmentYears}
              onChange={(e) => setInvestmentYears(Number(e.target.value))}
              min={1}
            />
          </div>

          <button
            onClick={calculateSIP}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition"
          >
            Calculate SIP
          </button>

          {futureValue !== null && (
            <div className="mt-6 text-center">
              <h2 className="text-xl font-semibold text-gray-800">🎯 Estimated Future Value</h2>
              <p className="text-2xl mt-2 text-green-600 font-bold">₹ {futureValue.toLocaleString()}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
