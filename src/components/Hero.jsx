import React from 'react'

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-rose-50 to-amber-50">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
            Relaxation & Wellbeing
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-900 tracking-tight">
            Cozy herbal blends to slow down, breathe, and feel good
          </h1>
          <p className="mt-4 text-emerald-800/80 text-lg leading-relaxed">
            Small-batch, caffeine-free herbal teas crafted to calm the mind, soothe the body, and create peaceful moments in your day.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#blends" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700 transition">
              Explore blends
            </a>
            <a href="#subscribe" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-emerald-900 font-semibold border border-emerald-200 hover:border-emerald-300 hover:bg-emerald-50 transition">
              Join newsletter
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-3xl bg-white/70 backdrop-blur p-4 shadow-xl ring-1 ring-emerald-100">
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="rounded-2xl bg-emerald-100/80" />
              <div className="rounded-2xl bg-amber-100/80" />
              <div className="rounded-2xl bg-rose-100/80" />
              <div className="rounded-2xl bg-emerald-200/70" />
            </div>
          </div>
          <p className="mt-3 text-sm text-emerald-800/70 text-center">Gently floral. Naturally soothing. Always caffeine-free.</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
