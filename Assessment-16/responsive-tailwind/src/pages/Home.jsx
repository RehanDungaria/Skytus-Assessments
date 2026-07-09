import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CardsSection from '../components/CardsSection';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div id="home" className="scroll-mt-20">
      <Navbar />
      <main>
        <Hero />
        <CardsSection />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;