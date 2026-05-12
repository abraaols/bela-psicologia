'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'E-books sobre saúde emocional',
    description: 'Guias práticos e acolhedores sobre ansiedade, autoestima e relacionamentos saudáveis.',
    tag: 'Em desenvolvimento',
    tagColor: 'bg-blush-light/60 text-primary',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Grupos de estudo em psicologia',
    description: 'Espaços online para discutir livros, casos e temas da psicologia de forma leve e colaborativa.',
    tag: 'Planejando',
    tagColor: 'bg-lavender-light/60 text-accent',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Mentorias de autoconhecimento',
    description: 'Sessões individuais para te ajudar a entender seus padrões emocionais e criar novas perspectivas.',
    tag: 'Em breve',
    tagColor: 'bg-muted text-muted-foreground',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Atendimentos clínicos',
    description: 'Quando me tornar psicóloga, quero atender pessoas que precisam de escuta especializada e gentil.',
    tag: 'Futuro próximo',
    tagColor: 'bg-blush-light/40 text-primary/70',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Podcast sobre emoções e vida',
    description: 'Conversas longas, honestas e acolhedoras sobre tudo que a gente sente mas raramente fala.',
    tag: 'Em desenvolvimento',
    tagColor: 'bg-blush-light/60 text-primary',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Comunidade Bela Psicologia',
    description: 'Um espaço digital seguro onde pessoas que curtem psicologia se encontram, aprendem e crescem juntas.',
    tag: 'Planejando',
    tagColor: 'bg-lavender-light/60 text-accent',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function ProjectsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="projetos" ref={ref} className="py-24 md:py-32">
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
              Projetos futuros
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground text-balance leading-[1.1]">
              O que está por vir
            </h2>
            <p className="text-muted-foreground max-w-sm text-sm md:text-base leading-relaxed">
              Iniciativas que nascem do desejo de criar um impacto real na saúde emocional das pessoas.
            </p>
          </div>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.05 * i }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-4 group cursor-default"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground group-hover:bg-blush-light/40 group-hover:text-primary transition-colors duration-300">
                  {project.icon}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.tagColor}`}>
                  {project.tag}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2 leading-snug">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 rounded-3xl bg-gradient-to-br from-blush-light/40 via-background to-lavender-light/30 border border-border p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between"
        >
          <div>
            <p className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-2">
              Quer acompanhar o que vem por aí?
            </p>
            <p className="text-muted-foreground text-sm md:text-base">
              Entre na lista de espera e seja a primeira a saber de cada novidade.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              const el = document.querySelector('#lista-de-espera')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            className="shrink-0 px-7 py-3.5 rounded-full bg-primary text-primary-foreground text-sm font-medium shadow-sm hover:opacity-90 transition-all whitespace-nowrap"
          >
            Quero acompanhar
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
