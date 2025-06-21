"use client";

import { useState } from "react";

type Loan = {
  name: string;
  principal: string;
  rate: string;
  tenure: string;
};

export default function LoanComparison() {
  const [loans, setLoans] = useState<Loan[]>([
    { name: "", principal: "", rate: "", tenure: "" },
  ]);

  const handleInputChange = (
    index: number,
    field: keyof Loan,
    value: string
  ) => {
    const updatedLoans = [...loans];
    updatedLoans[index] = {
      ...updatedLoans[index],
      [field]: value,
    };
    setLoans(updatedLoans);
  };

  const addLoan = () => {
    setLoans([
      ...loans,
      { name: "", principal: "", rate: "", tenure: "" },
    ]);
  };

  const calculateEMI = (p: number, r: number, n: number) => {
    const monthlyRate = r / 12 / 100;
    return (p * monthlyRate * Math.pow(1 + monthlyRate, n)) /
      (Math.pow(1 + monthlyRate, n) - 1);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        📊 Loan Comparison Tool
      </h1>

      {loans.map((loan, index) => (
        <div key={index} className="bg-white shadow p-6 rounded-lg mb-6 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Loan Name"
              value={loan.name}
              onChange={(e) => handleInputChange(index, "name", e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
            />
            <input
              type="number"
              placeholder="Principal Amount"
              value={loan.principal}
              onChange={(e) => handleInputChange(index, "principal", e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
            />
            <input
              type="number"
              placeholder="Interest Rate (%)"
              value={loan.rate}
              onChange={(e) => handleInputChange(index, "rate", e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
            />
            <input
              type="number"
              placeholder="Tenure (months)"
              value={loan.tenure}
              onChange={(e) => handleInputChange(index, "tenure", e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          {loan.principal && loan.rate && loan.tenure && (
            <p className="text-green-600 font-semibold">
              Estimated EMI: ₹
              {calculateEMI(
                parseFloat(loan.principal),
                parseFloat(loan.rate),
                parseFloat(loan.tenure)
              ).toFixed(2)}
            </p>
          )}
        </div>
      ))}

      <div className="text-center">
        <button
          onClick={addLoan}
          className="w-full bg-[#FF5722] text-white py-2 rounded hover:bg-[#E64A19] transition-colors"
        >
          ➕ Add Another Loan
        </button>
      </div>
    </main>
  );
}
