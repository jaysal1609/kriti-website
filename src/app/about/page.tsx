"use client";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-100 px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          🌟 About Kriti Systems
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          At <span className="font-semibold text-orange-600">Kriti Systems</span>, we&apos;re
          on a mission to democratize financial wisdom — one tool at a time. Whether it&apos;s
          planning your future, comparing loans, or managing everyday finances, Kriti
          Systems empowers individuals and small businesses with smart, easy-to-use
          calculators and decision-making tools.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Founded with the vision of making financial literacy accessible to all, our
          platform blends cutting-edge technology with regional relevance to serve the
          next billion users.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          Proudly made in 🇮🇳 India. Secure, scalable, and designed with ❤️ for the world.
        </p>
      </div>

      <div className="mt-16 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">🚀 What&apos;s Coming Next?</h2>
        <ul className="text-gray-600 text-base space-y-2 list-inside list-disc text-left inline-block">
          <li>🔐 Profile-based recommendations</li>
          <li>📈 Smart investment &amp; tax tools</li>
          <li>🎯 Personalized goal planning</li>
          <li>📊 Regional language support</li>
        </ul>
      </div>
    </main>
  );
}