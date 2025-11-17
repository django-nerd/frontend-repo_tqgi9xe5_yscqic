import React, { useState } from 'react'

function Subscribe() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name })
      })
      if (!res.ok) throw new Error('Failed to subscribe')
      setStatus('success')
      setEmail('')
      setName('')
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section id="subscribe" className="max-w-6xl mx-auto px-6 py-16">
      <div className="rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 p-1">
        <div className="rounded-2xl bg-white p-8 md:p-10">
          <div className="md:flex items-center justify-between gap-8">
            <div className="md:max-w-md">
              <h3 className="text-2xl font-bold text-emerald-900">Brew calm in your inbox</h3>
              <p className="mt-2 text-emerald-800/80">Short, soothing notes about herbs, rest, and gentle rituals. No spam, ever.</p>
            </div>
            <form onSubmit={handleSubmit} className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-3 w-full md:max-w-xl">
              <input
                type="text"
                placeholder="Your name (optional)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-[2] px-4 py-3 rounded-lg border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </div>
          {status === 'success' && (
            <p className="mt-3 text-sm text-emerald-700">Thanks for joining. A warm cup awaits. ☕️</p>
          )}
          {status === 'error' && (
            <p className="mt-3 text-sm text-red-600">Something went wrong. Please try again.</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default Subscribe
