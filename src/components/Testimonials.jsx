import React, { useEffect, useState } from 'react'

function Testimonials() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/testimonials`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        setItems([])
      }
    }
    fetchItems()
  }, [])

  return (
    <section className="bg-emerald-50/50 border-t border-emerald-100">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6">What customers say</h2>
        {items.length === 0 ? (
          <p className="text-emerald-800/80">Be the first to leave a kind word.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {items.map((t) => (
              <figure key={t._id} className="rounded-2xl bg-white border border-emerald-100 p-6 shadow-sm">
                <blockquote className="text-emerald-900">“{t.quote}”</blockquote>
                <figcaption className="mt-3 text-sm text-emerald-800/80">— {t.name}{t.blend ? `, on ${t.blend}` : ''}</figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Testimonials
