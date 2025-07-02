import React from 'react';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Team from './components/Team';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <Team />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;