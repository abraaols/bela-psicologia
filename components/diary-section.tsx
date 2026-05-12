'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const categories = ['Todos', 'Ansiedade', 'Relacionamentos', 'Autoconhecimento', 'Rotina emocional', 'Reflexões', 'Vida universitária']

const articles = [
  {
    id: 1,
    title: 'O que a ansiedade está tentando te dizer?',
    excerpt: 'Ela não é apenas aquela sensação ruim no peito. A ansiedade carrega mensagens importantes sobre o que você está ignorando.',
    category: 'Ansiedade',
    readTime: '5 min',
    date: 'Mai 2025',
    featured: true,
    color: 'bg-blush-light/50',
  },
  {
    id: 2,
    title: 'Por que a gente se apega a quem não quer a gente',
    excerpt: 'O apego ansioso vai muito além do relacionamento amoroso — ele começa muito antes.',
    category: 'Relacionamentos',
    readTime: '7 min',
    date: 'Abr 2025',
    featured: false,
    color: 'bg-lavender-light/40',
  },
  {
    id: 3,
    title: 'A arte de se conhecer sem se julgular',
    excerpt: 'Autoconhecimento não é sobre ser dura consigo mesma. É sobre enxergar com clareza e gentileza.',
    category: 'Autoconhecimento',
    readTime: '6 min',
    date: 'Abr 2025',
    featured: false,
    color: 'bg-secondary',
  },
  {
    id: 4,
    title: 'Rotina emocional: o que é e por que você precisa de uma',
    excerpt: 'Assim como cuidamos do corpo, precisamos cuidar das emoções de forma intencional e consistente.',
    category: 'Rotina emocional',
    readTime: '8 min',
    date: 'Mar 2025',
    featured: false,
    color: 'bg-blush-light/30',
  },
  {
    id: 5,
    title: 'O que ninguém te conta sobre fazer psicologia',
    excerpt: 'A faculdade de psicologia te muda por dentro. Aqui vai o que vivi no 5° período.',
    category: 'Vida universitária',
    readTime: '9 min',
    date: 'Mar 2025',
    featured: false,
    color: 'bg-lavender-light/30',
  },
  {
    id: 6,
    title: 'Às 2h da manhã quando tudo pesa demais',
    excerpt: 'Uma reflexão honesta sobre as noites em que a mente não para e o coração pesa.',
    category: 'Reflexões',
    readTime: '4 min',
    date: 'Fev 2025',
    featured: false,
    color: 'bg-muted',
  },
]

function ArticleCard({ article, index }: { article: typeof articles[0]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      layout
      className={`group rounded-2xl border border-border overflow-hidden ${article.color} transition-shadow duration-300 cursor-default`}
    >
      <div className="p-6 flex flex-col gap-4 h-full">
        <div className="flex items-start justify-between gap-3">
          <span className="px-3 py-1 rounded-full bg-background/70 text-xs font-medium text-muted-foreground border border-border/60">
            {article.category}
          </span>
          <span className="text-xs text-muted-foreground whitespace-nowrap">{article.date}</span>
        </div>

        <div className="flex-1">
          <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground leading-snug mb-2 text-balance">
            {article.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{article.excerpt}</p>
        </div>

        <div className="pt-2 border-t border-border/50">
          <span className="text-xs text-muted-foreground">{article.readTime} de leitura</span>
        </div>
      </div>
    </motion.article>
  )
}

function FeaturedArticle({ article }: { article: typeof articles[0] }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="col-span-full rounded-3xl border border-border bg-card overflow-hidden cursor-default"
    >
      <div className="grid md:grid-cols-2 min-h-[280px]">
        <div className={`${article.color} flex items-center justify-center p-10 relative overflow-hidden`}>
          <div aria-hidden className="absolute inset-0">
            <div className="absolute top-4 right-4 w-32 h-32 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute bottom-4 left-4 w-24 h-24 rounded-full bg-lavender/10 blur-2xl" />
          </div>
          <div className="relative z-10 text-center">
            <span className="font-serif italic text-5xl md:text-6xl text-primary/30 select-none">&ldquo;</span>
            <p className="font-serif italic text-lg md:text-xl text-foreground/80 leading-relaxed max-w-sm">
              {article.excerpt}
            </p>
          </div>
        </div>
        <div className="p-8 md:p-10 flex flex-col justify-between">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-xs font-semibold text-primary border border-primary/20">
              Destaque
            </span>
            <span className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground border border-border">
              {article.category}
            </span>
          </div>
          <div>
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground leading-snug mb-4 text-balance">
              {article.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">{article.excerpt}</p>
            <span className="text-sm text-muted-foreground">{article.readTime} · {article.date}</span>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default function DiarySection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [search, setSearch] = useState('')

  const filtered = articles.filter((a) => {
    const matchCat = activeCategory === 'Todos' || a.category === activeCategory
    const matchSearch = a.title.toLowerCase().includes(search.toLowerCase()) || a.excerpt.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  const featured = filtered.find((a) => a.featured)
  const rest = filtered.filter((a) => !a.featured)

  return (
    <section id="diario" ref={ref} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10 md:mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-primary" />
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
              Diário digital
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground text-balance leading-[1.1]">
              Reflexões & artigos
            </h2>
            <p className="text-muted-foreground max-w-sm text-sm md:text-base">
              Textos pessoais sobre o que vivemos por dentro.
            </p>
          </div>
        </motion.div>

        {/* Search + filters */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-4 mb-8"
        >
          {/* Search */}
          <div className="relative max-w-md">
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none">
              <path d="M17.5 17.5l-3.5-3.5m0 0A6.5 6.5 0 103 10a6.5 6.5 0 0011 4z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <input
              type="search"
              placeholder="Buscar reflexões..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
          </div>

          {/* Category filters */}
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-card text-muted-foreground border-border hover:bg-secondary hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Article grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {featured && <FeaturedArticle article={featured} key={`featured-${featured.id}`} />}
            {rest.map((a, i) => (
              <ArticleCard article={a} index={i} key={a.id} />
            ))}
          </AnimatePresence>
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center py-16 text-muted-foreground"
            >
              <p className="font-serif italic text-lg">Nenhuma reflexão encontrada.</p>
              <p className="text-sm mt-2">Tente outra busca ou categoria.</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
