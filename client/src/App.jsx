import { useState } from 'react'
import Navbar from './components/ui/Navbar'
import HeroSection from './components/ui/HeroSection'
import OverviewSection from './components/ui/OverviewSection'
import EcosystemSection from './components/ui/EcosystemSection'
import AerospaceSection from './components/ui/AerospaceSection'
import ValidationSection from './components/ui/ValidationSection'
import ArchitectureSection from './components/ui/ArchitectureSection'
import RoadmapSection from './components/ui/RoadmapSection'
import ContactSection from './components/ui/ContactSection'
import Footer from './components/ui/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <OverviewSection />
      <EcosystemSection />
      <AerospaceSection />
      <ValidationSection />
      <ArchitectureSection />
      <RoadmapSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App
