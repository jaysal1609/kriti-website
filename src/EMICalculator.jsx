import React, { useState } from 'react';

export default function EMICalculator() {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [emi, setEmi] = useState(null);

  const calculateEMI = () => {
    const P = parseFloat(principal);
    const R = parseFloat(rate) / 1200;
    const N = parseFloat(tenure) * 12;
    const emiCalc = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    setEmi(emiCalc.toFixed(2));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">EMI Calculator</h2>
      <input type="number" placeholder="Principal" value={principal} onChange={e => setPrincipal(e.target.value)} className="border p-2 mb-2 w-full"/>
      <input type="number" placeholder="Annual Interest Rate (%)" value={rate} onChange={e => setRate(e.target.value)} className="border p-2 mb-2 w-full"/>
      <input type="number" placeholder="Tenure (in years)" value={tenure} onChange={e => setTenure(e.target.value)} className="border p-2 mb-2 w-full"/>
      <button onClick={calculateEMI} className="bg-blue-500 text-white px-4 py-2">Calculate EMI</button>
      {emi && <p className="mt-4 text-green-600">Your monthly EMI is ₹{emi}</p>}
    </div>
  );
}
