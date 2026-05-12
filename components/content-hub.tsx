'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const platforms = [
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@bela.psi_',
    description: 'Posts, reels e stories sobre emoções e autoconhecimento',
    href: 'https://instagram.com/bela.psi_',
    color: 'from-[oklch(0.62_0.18_15)] to-[oklch(0.55_0.12_300)]',
    bgLight: 'bg-blush-light/40',
    textAccent: 'text-primary',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    previews: [
      { title: 'Como identificar a ansiedade no corpo', type: 'Reel', views: '12k' },
      { title: '5 sinais de que você está emocionalmente sobrecarregada', type: 'Post', views: '8k' },
      { title: 'Por que amamos quem nos machuca?', type: 'Reel', views: '20k' },
    ],
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    handle: '@belapsicologia',
    description: 'Vídeos curtos e divertidos sobre psicologia do dia a dia',
    href: 'https://tiktok.com/@belapsicologia',
    color: 'from-[oklch(0.14_0.01_240)] to-[oklch(0.62_0.18_15)]',
    bgLight: 'bg-secondary',
    textAccent: 'text-foreground',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
    previews: [
      { title: 'O que a psicologia diz sobre amizades tóxicas', type: 'Vídeo', views: '45k' },
      { title: 'Técnica de regulação emocional em 2 min', type: 'Vídeo', views: '33k' },
      { title: 'Por que você procrastina tanto?', type: 'Vídeo', views: '28k' },
    ],
  },
  {
    id: 'youtube',
    name: 'YouTube',
    handle: 'Bela Psicologia',
    description: 'Vídeos aprofundados, reflexões e conversas sobre saúde mental',
    href: 'https://youtube.com/@belapsicologia',
    color: 'from-[oklch(0.52_0.2_28)] to-[oklch(0.45_0.15_30)]',
    bgLight: 'bg-blush-light/30',
    textAccent: 'text-primary',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    previews: [
      { title: 'Terapia: o que é, para que serve e como funciona', type: 'Vídeo', views: '18k' },
      { title: 'Lidando com a ansiedade na vida universitária', type: 'Vídeo', views: '22k' },
      { title: 'Apego ansioso: você se identifica?', type: 'Vídeo', views: '31k' },
    ],
  },
]

export default function ContentHub() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState('instagram')

  const platform = platforms.find((p) => p.id === active)!

  return (
    <section id="conteudos" ref={ref} className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-primary" />
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
              Hub de conteúdo
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground text-balance leading-[1.1]">
              Onde me encontrar
            </h2>
            <p className="text-muted-foreground max-w-sm leading-relaxed text-sm md:text-base">
              Conteúdos sobre psicologia em diferentes formatos para diferentes momentos seus.
            </p>
          </div>
        </motion.div>

        {/* Platform tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex gap-2 mb-8 overflow-x-auto pb-2"
        >
          {platforms.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap border ${
                active === p.id
                  ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                  : 'border-border bg-card text-muted-foreground hover:bg-secondary hover:text-foreground'
              }`}
            >
              <span className="w-4 h-4 flex items-center justify-center [&>svg]:w-3.5 [&>svg]:h-3.5">{p.icon}</span>
              {p.name}
            </button>
          ))}
        </motion.div>

        {/* Platform card */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl border border-border bg-card overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            {/* Left info */}
            <div className="p-8 md:p-10 flex flex-col gap-6 border-b md:border-b-0 md:border-r border-border">
              <div className={`w-14 h-14 rounded-2xl ${platform.bgLight} flex items-center justify-center ${platform.textAccent}`}>
                {platform.icon}
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-1">
                  {platform.name}
                </h3>
                <p className="text-sm text-muted-foreground">{platform.handle}</p>
              </div>
              <p className="text-muted-foreground leading-relaxed">{platform.description}</p>
              <a
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Ver conteúdo
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                </svg>
              </a>
            </div>

            {/* Right — em breve terá conteúdos recentes */}
            <div className="p-8 md:p-10 flex flex-col gap-4 items-center justify-center bg-secondary/20">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-secondary flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-muted-foreground">
                    <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-foreground mb-1">Conteúdos em breve</p>
                <p className="text-xs text-muted-foreground max-w-[200px]">
                  Estamos preparando conteúdos especiais para você.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Podcast teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 rounded-3xl border border-dashed border-border bg-card/50 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-lavender-light flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-accent">
                <path d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-foreground">Podcast — Em breve</p>
              <p className="text-sm text-muted-foreground mt-0.5">Conversas longas sobre emoções, vida e psicologia</p>
            </div>
          </div>
          <span className="px-4 py-1.5 rounded-full bg-lavender-light text-accent text-xs font-medium">
            Novidade chegando
          </span>
        </motion.div>
      </div>
    </section>
  )
}
