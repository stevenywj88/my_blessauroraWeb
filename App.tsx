import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import PerfumeShowcase from './components/PerfumeShowcase';
import TeaSeries from './components/TeaSeries';
import AIAromaCompanion from './components/AIAromaCompanion';
import Workshop from './components/Workshop';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-nature-sand selection:bg-nature-sage selection:text-white">
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <PerfumeShowcase />
        <TeaSeries />
        <Workshop />
        <AIAromaCompanion />
      </main>
      <Footer />
    </div>
  );
};

export default App;
