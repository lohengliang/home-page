import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import PortfolioSection from './components/PortfolioSection';

function App() {
  return (
    <div>
      <NavigationBar />
      <AboutSection />
      <ContactSection />
      <PortfolioSection />
    </div>
  );
}

export default App;
