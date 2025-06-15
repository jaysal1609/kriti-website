"use client";

import { useState } from "react";

export default function RetirementPlanner() {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [monthlyExpense, setMonthlyExpense] = useState(40000);
  const [inflationRate, setInflationRate] = useState(6);
  const [postRetirementReturn, setPostRetirementReturn] = useState(8);
  const [lifeExpectancy, setLifeExpectancy] = useState(85);
  const [requiredCorpus, setRequiredCorpus] = useState<number | null>(null);

  const calculateRetirementCorpus = () => {
    const yearsToRetire = retirementAge - currentAge;
    const yearsAfterRetirement = lifeExpectancy - retirementAge;

    const futureExpense = monthlyExpense * Math.pow(1 + inflationRate / 100, yearsToRetire);
    const r = postRetirementReturn / 12 / 100;
    const n = yearsAfterRetirement * 12;

    const corpus =
      futureExpense * 12 * ((1 - Math.pow(1 + r, -n)) / r);

    setRequiredCorpus(Math.round(corpus));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-100 px-6 py-12">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          🧓 Retirement Planner
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium">Current Age</label>
            <input
              type="number"
              className="w-full mt-1 px-4 py-2 border rounded-lg"
              value={currentAge}
              onChange={(e) => setCurrentAge(Number(e.target.value))}
              min={18}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Retirement Age</label>
            <input
              type="number"
              className="w-full mt-1 px-4 py-2 border rounded-lg"
              value={retirementAge}
              onChange={(e) => setRetirementAge(Number(e.target.value))}
              min={currentAge}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Monthly Expenses (₹)</label>
            <input
              type="number"
              className="w-full mt-1 px-4 py-2 border rounded-lg"
              value={monthlyExpense}
              onChange={(e) => setMonthlyExpense(Number(e.target.value))}
              min={1000}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Inflation Rate (%)</label>
            <input
              type="number"
              className="w-full mt-1 px-4 py-2 border rounded-lg"
              value={inflationRate}
              onChange={(e) => setInflationRate(Number(e.target.value))}
              step="0.1"
              min={0}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Return Rate After Retirement (%)</label>
            <input
              type="number"
              className="w-full mt-1 px-4 py-2 border rounded-lg"
              value={postRetirementReturn}
              onChange={(e) => setPostRetirementReturn(Number(e.target.value))}
              step="0.1"
              min={0}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Life Expectancy (Years)</label>
            <input
              type="number"
              className="w-full mt-1 px-4 py-2 border rounded-lg"
              value={lifeExpectancy}
              onChange={(e) => setLifeExpectancy(Number(e.target.value))}
              min={retirementAge}
            />
          </div>
        </div>

        <button
          onClick={calculateRetirementCorpus}
          className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition"
        >
          Calculate Required Retirement Corpus
        </button>

        {requiredCorpus !== null && (
          <div className="mt-8 text-center">
            <h2 className="text-xl font-semibold text-gray-800">
              🎯 Required Retirement Corpus
            </h2>
            <p className="text-2xl mt-2 text-green-600 font-bold">
              ₹ {requiredCorpus.toLocaleString()}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
