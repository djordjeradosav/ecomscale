import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Philosophy from './components/Philosophy'
import Protocol from './components/Protocol'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <main className="relative bg-background min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Philosophy />
      {/* Spacer to allow standard scrolling between sections before pin */}
      <div className="h-32 bg-background"></div>
      <Protocol />
      <Pricing />
      <Footer />
    </main>
  )
}

export default App
