import React, { useEffect, useState } from 'react'

function Blends() {
  const [blends, setBlends] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlends = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/blends`)
        const data = await res.json()
        setBlends(data)
      } catch (e) {
        setBlends([])
      } finally {
        setLoading(false)
      }
    }
    fetchBlends()
  }, [])

  return (
    <section id="blends" className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-900">Signature blends</h2>
        <span className="text-emerald-800/70 text-sm">Caffeine-free, ethically sourced</span>
      </div>

      {loading ? (
        <p className="text-emerald-800/70">Loading calming goodness...</p>
      ) : blends.length === 0 ? (
        <div className="rounded-xl border border-emerald-200 p-6 bg-white">
          <p className="text-emerald-800/80">No blends yet. Add some via the API to see them appear.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blends.map((b) => (
            <div key={b._id} className="group rounded-2xl bg-white border border-emerald-100 hover:border-emerald-200 shadow-sm hover:shadow-md transition overflow-hidden">
              {b.image ? (
                <img src={b.image} alt={b.name} className="h-44 w-full object-cover" />
              ) : (
                <div className="h-44 w-full bg-gradient-to-tr from-emerald-100 via-rose-100 to-amber-100" />
              )}
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-emerald-900">{b.name}</h3>
                  <span className="text-emerald-800/80 text-sm">${b.price?.toFixed ? b.price.toFixed(2) : b.price}</span>
                </div>
                <p className="mt-2 text-sm text-emerald-800/80 line-clamp-2">{b.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {(b.tags || []).slice(0,3).map(t => (
                    <span key={t} className="px-2 py-1 text-xs rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default Blends
