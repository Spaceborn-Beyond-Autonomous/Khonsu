import { useState } from 'react'
import Navbar from './components/ui/Navbar'
import HeroSection from './components/ui/HeroSection'
import EcosystemSection from './components/ui/EcosystemSection'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <EcosystemSection />
    </>
  )
}

export default App
