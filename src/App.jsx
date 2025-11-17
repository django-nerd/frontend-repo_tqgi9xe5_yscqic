import React from 'react'
import Hero from './components/Hero'
import Blends from './components/Blends'
import Testimonials from './components/Testimonials'
import Subscribe from './components/Subscribe'

function App() {
  return (
    <div className="min-h-screen bg-emerald-50">
      <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-emerald-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="font-extrabold text-emerald-900 tracking-tight text-xl">Cozy Herbals</a>
          <nav className="hidden sm:flex gap-6 text-emerald-900/80 text-sm">
            <a href="#blends" className="hover:text-emerald-900">Blends</a>
            <a href="#subscribe" className="hover:text-emerald-900">Subscribe</a>
            <a href="/test" className="hover:text-emerald-900">Status</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Blends />
        <Testimonials />
        <Subscribe />
      </main>

      <footer className="border-t border-emerald-100">
        <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-emerald-800/80">
          <p>&copy; {new Date().getFullYear()} Cozy Herbals. Brew calm. Be well.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
