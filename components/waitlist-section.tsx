'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbykdwvdb0FIzGLxIwFLjK0Xelk1ieNoyamkfiX7mBLYgsrOfNCtYDActSffjtcHHgA-pw/exec'

export default function WaitlistSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || status === 'loading') return

    setStatus('loading')
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="lista-de-espera" ref={ref} className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-2xl mx-auto px-5 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-px bg-primary" />
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
              Lista de espera
            </span>
            <span className="w-8 h-px bg-primary" />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground leading-[1.1] mb-4">
            Fique por dentro do que vem aí
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10 text-sm md:text-base max-w-lg mx-auto">
            Em breve lançarei uma newsletter com reflexões, conteúdos e novidades sobre psicologia e autoconhecimento. Deixa seu e-mail e você será uma das primeiras a saber.
          </p>

          {/* Form */}
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-primary">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="font-serif text-xl font-semibold text-foreground mb-2">
                Você está na lista! 🎉
              </p>
              <p className="text-sm text-muted-foreground">
                Assim que lançarmos, você será uma das primeiras a saber.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-5 py-3.5 rounded-full border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />
              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 rounded-full bg-primary text-primary-foreground text-sm font-medium shadow-sm hover:opacity-90 transition-all whitespace-nowrap disabled:opacity-60"
              >
                {status === 'loading' ? 'Salvando...' : 'Entrar na lista'}
              </motion.button>
            </form>
          )}

          {status === 'error' && (
            <p className="text-sm text-red-500 mt-3">
              Algo deu errado. Tente novamente ou entre em contato pelo WhatsApp.
            </p>
          )}

          {/* Social proof note */}
          <p className="text-xs text-muted-foreground mt-6">
            Sem spam. Só conteúdo com cuidado e intenção. ✦
          </p>
        </motion.div>
      </div>
    </section>
  )
}
