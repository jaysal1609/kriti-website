// app/tools/page.tsx
"use client";

import React from "react";
import Link from "next/link";

const tools = [
  {
    name: "EMI Calculator",
    path: "/tools/emi",
    description: "Plan your loans smartly",
    available: true,
  },
  {
    name: "SIP Calculator",
    path: "/tools/sip-calculator",
    description: "Estimate your SIP returns",
    available: true,
  },
  {
    name: "Retirement Planner",
    path: "/tools/retirement-planner",
    description: "Plan your future with confidence",
    available: true,
  },
  {
    name: "Loan Comparison",
    path: "/tools/loan-comparison",
    description: "Compare multiple loan offers",
    available: true,
  },
];

export default function ToolsDashboard() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        🧮 Financial Tools Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="bg-white border rounded-xl shadow-sm p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              {tool.name}
              {tool.available ? (
                <span className="text-sm text-orange-500 animate-pulse">✨</span>
              ) : (
                <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded">
                  Coming Soon
                </span>
              )}
            </h2>
            <p className="text-gray-600 mt-2">{tool.description}</p>
            {tool.available ? (
              <Link
                href={tool.path}
                className="inline-block mt-4 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
              >
                Open
              </Link>
            ) : (
              <button
                disabled
                className="inline-block mt-4 bg-gray-300 text-white px-4 py-2 rounded-md cursor-not-allowed"
              >
                Coming Soon
              </button>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
