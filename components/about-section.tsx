'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const traits = [
  {
    label: 'Estudiosa',
    description: '5° período de Psicologia, apaixonada por comportamento humano e saúde mental.',
    color: 'bg-blush-light text-primary',
  },
  {
    label: 'Curiosa',
    description: 'Fascinada pelo que move as pessoas — emoções, padrões, histórias.',
    color: 'bg-lavender-light text-accent-foreground',
  },
  {
    label: 'Criativa',
    description: 'Transforma conceitos densos em conteúdos acessíveis e humanos.',
    color: 'bg-secondary text-foreground',
  },
  {
    label: 'Acolhedora',
    description: 'Acredita que todo mundo merece um espaço seguro para se entender.',
    color: 'bg-muted text-foreground',
  },
]

const values = [
  'Autoconhecimento',
  'Leveza',
  'Profundidade',
  'Autenticidade',
  'Cuidado',
  'Escuta',
]

export default function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="quem-sou" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background accent */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 w-[40%] h-full bg-gradient-to-l from-blush-light/20 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-primary" />
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
              Quem sou eu
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground text-balance leading-[1.1]">
            Olá, eu sou a <em className="italic text-primary">Bela</em>
          </h2>
        </motion.div>

        {/* Main grid */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left — personal text */}
          <div className="flex flex-col gap-6">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              Tenho 20 anos, sou de São Paulo e me apaixonei pela Psicologia porque sempre quis entender o porquê das coisas e especialmente das pessoas.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              Criei a Bela Psicologia como um espaço íntimo na internet - um lugar onde falo sobre emoções, relacionamentos, vida universitária e autoconhecimento com a leveza que eu gostaria de ter encontrado quando precisei.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.26 }}
              className="text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              Aqui não tem respostas prontas, diagnósticos ou linguagem clínica. Tem <strong className="font-semibold text-foreground">presença, escuta e muito cuidado</strong> com cada pessoa que passa por aqui.
            </motion.p>

            {/* Values tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.34 }}
              className="flex flex-wrap gap-2 pt-2"
            >
              {values.map((v) => (
                <span
                  key={v}
                  className="px-4 py-1.5 rounded-full border border-border text-sm text-muted-foreground bg-card hover:bg-secondary hover:text-foreground transition-colors duration-200 cursor-default"
                >
                  {v}
                </span>
              ))}
            </motion.div>

            {/* Handwritten-style quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.42 }}
              className="mt-2 pl-5 border-l-2 border-primary/50"
            >
              <p className="font-serif italic text-xl md:text-2xl text-foreground/80 leading-relaxed">
                &ldquo;Entender-se é o ato mais corajoso que existe.&rdquo;
              </p>
              <cite className="block mt-3 text-xs text-muted-foreground not-italic tracking-wide uppercase">— Bela</cite>
            </motion.blockquote>
          </div>

          {/* Right — trait cards */}
          <div className="grid grid-cols-2 gap-4">
            {traits.map((trait, i) => (
              <motion.div
                key={trait.label}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="rounded-2xl p-5 border border-border bg-card flex flex-col gap-3 cursor-default"
              >
                <span className={`self-start px-3 py-1 rounded-full text-xs font-semibold ${trait.color}`}>
                  {trait.label}
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed">{trait.description}</p>
              </motion.div>
            ))}

            {/* Spanning wider card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="col-span-2 rounded-2xl p-5 border border-primary/20 bg-blush-light/30 dark:bg-primary/10 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 text-primary" stroke="currentColor" strokeWidth="1.5">
                  <path d="M10 2C6.134 2 3 5.134 3 9c0 2.386 1.19 4.49 3 5.773V15a1 1 0 001 1h6a1 1 0 001-1v-.227C15.81 13.49 17 11.386 17 9c0-3.866-3.134-7-7-7z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7 18h6" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">Em constante aprendizado</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Cada semestre me ensina algo novo sobre a mente humana — e sobre mim mesma. Estou aqui crescendo junto com você.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
