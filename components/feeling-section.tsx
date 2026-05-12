'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const feelings = [
  {
    id: 'ansiosa',
    label: 'Ansiosa',
    icon: '◦',
    color: 'bg-blush-light/60 hover:bg-blush-light border-blush-light/80',
    activeColor: 'bg-primary text-primary-foreground border-primary',
    message: 'Respira. A ansiedade é uma proteção que ficou travada. Você não está em perigo agora — você está apenas sentindo demais.',
    recommendation: {
      type: 'Artigo',
      title: 'O que a ansiedade está tentando te dizer?',
      desc: 'Entenda a mensagem por trás da sensação.',
    },
  },
  {
    id: 'confusa',
    label: 'Confusa',
    icon: '◌',
    color: 'bg-lavender-light/60 hover:bg-lavender-light border-lavender-light/80',
    activeColor: 'bg-accent text-accent-foreground border-accent',
    message: 'Estar confusa não é fraqueza. É o momento onde algo dentro de você está se reorganizando. Dê tempo.',
    recommendation: {
      type: 'Reflexão',
      title: 'A arte de se conhecer sem se julgar',
      desc: 'Autoconhecimento começa pela confusão.',
    },
  },
  {
    id: 'sem-energia',
    label: 'Sem energia',
    icon: '▽',
    color: 'bg-secondary hover:bg-muted border-border',
    activeColor: 'bg-foreground text-background border-foreground',
    message: 'Às vezes o corpo pede pausa. E tudo bem não estar bem. Descansar também é produtividade.',
    recommendation: {
      type: 'Artigo',
      title: 'Rotina emocional: cuide de si com intenção',
      desc: 'Pequenos rituais para recarregar.',
    },
  },
  {
    id: 'motivada',
    label: 'Motivada',
    icon: '▲',
    color: 'bg-blush-light/40 hover:bg-blush-light/60 border-blush-light/60',
    activeColor: 'bg-primary text-primary-foreground border-primary',
    message: 'Que energia linda! Aproveita essa fase para criar, aprender e se desafiar. E anota o que está funcionando.',
    recommendation: {
      type: 'Vídeo',
      title: 'Como criar hábitos emocionais que duram',
      desc: 'Transforme essa motivação em consistência.',
    },
  },
  {
    id: 'feliz',
    label: 'Feliz',
    icon: '○',
    color: 'bg-lavender-light/40 hover:bg-lavender-light/60 border-lavender-light/60',
    activeColor: 'bg-accent text-accent-foreground border-accent',
    message: 'Sente essa leveza. A felicidade não precisa ser justificada. Deixa ela acontecer.',
    recommendation: {
      type: 'Reflexão',
      title: 'Alegria como escolha — e como prática',
      desc: 'Cultivar a felicidade também é psicologia.',
    },
  },
  {
    id: 'sobrecarregada',
    label: 'Sobrecarregada',
    icon: '●',
    color: 'bg-muted hover:bg-muted/80 border-border',
    activeColor: 'bg-taupe text-primary-foreground border-taupe',
    message: 'Você carrega muito. Talvez mais do que deveria. Não precisa resolver tudo agora. Comece pelo mais simples.',
    recommendation: {
      type: 'Artigo',
      title: 'Às 2h da manhã quando tudo pesa demais',
      desc: 'Uma reflexão para as noites difíceis.',
    },
  },
]

export default function FeelingSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [selected, setSelected] = useState<string | null>(null)

  const feeling = feelings.find((f) => f.id === selected)

  return (
    <section ref={ref} className="py-24 md:py-32 bg-secondary/30 overflow-hidden">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-primary" />
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
              Como você está?
            </span>
            <span className="w-8 h-px bg-primary" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground text-balance leading-[1.1] mb-4">
            Como você está se sentindo hoje?
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
            Escolha o que mais se aproxima do que você está sentindo. Tem algo aqui para você.
          </p>
        </motion.div>

        {/* Feeling buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10"
        >
          {feelings.map((f, i) => (
            <motion.button
              key={f.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelected(selected === f.id ? null : f.id)}
              className={`flex flex-col items-center gap-2 py-5 px-4 rounded-2xl border text-sm font-medium transition-all duration-250 ${
                selected === f.id
                  ? f.activeColor
                  : `${f.color} text-foreground`
              }`}
            >
              <span className="text-2xl font-serif select-none" aria-hidden>{f.icon}</span>
              {f.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Response card */}
        <AnimatePresence mode="wait">
          {feeling && (
            <motion.div
              key={feeling.id}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border border-border bg-card overflow-hidden"
            >
              <div className="p-8 md:p-10">
                {/* Message */}
                <div className="mb-8">
                  <span className="font-serif text-4xl text-primary/30 leading-none select-none">&ldquo;</span>
                  <p className="font-serif italic text-lg md:text-xl text-foreground leading-relaxed -mt-2">
                    {feeling.message}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">— Bela</p>
                </div>

                {/* Recommendation */}
                <div className="border-t border-border pt-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                    Para você, agora
                  </p>
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-secondary/60 hover:bg-secondary transition-colors cursor-pointer group">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-primary">
                        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm10 0H4v10h8V5zm2 1.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v9a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium text-primary">{feeling.recommendation.type}</span>
                      </div>
                      <p className="text-sm font-semibold text-foreground">{feeling.recommendation.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{feeling.recommendation.desc}</p>
                    </div>
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0 mt-2">
                      <path d="M3 8h10m-4-4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Placeholder when nothing selected */}
        {!selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-10 text-muted-foreground"
          >
            <p className="font-serif italic text-lg">Escolha uma emoção acima.</p>
            <p className="text-sm mt-1">Sem julgamentos aqui.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
