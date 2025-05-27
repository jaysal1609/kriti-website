import React from 'react';
import Header from './Header';
import Footer from './Footer';
import EMICalculator from './EMICalculator';

export default function App() {
  return (
    <div>
      <Header />
      <main className="p-4">
        <section id="home" className="mb-8">
          <h1 className="text-3xl font-bold">Welcome to Kriti Systems</h1>
          <p>Your go-to platform for smart financial and tech tools.</p>
        </section>
        <section id="calculators" className="mb-8">
          <EMICalculator />
        </section>
        <section id="about" className="mb-8">
          <h2 className="text-xl font-bold">About Us</h2>
          <p>Kriti Systems builds intelligent, user-friendly tools to simplify decision-making.</p>
        </section>
        <section id="contact" className="mb-8">
          <h2 className="text-xl font-bold">Contact</h2>
          <p>Email us at <a href="mailto:contact@kritisystems.com">contact@kritisystems.com</a></p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
