import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ExternalLink, Workflow, ShoppingCart, Palette, Users, MessageSquare, Database, Globe } from 'lucide-react'

type Category = 'toate' | 'automatizari' | 'web' | 'crm'

interface Project {
  id: string
  icon: typeof Workflow
  title: string
  desc: string
  tags: string[]
  category: Category
  link?: string
  highlight?: string
}

const projects: Project[] = [
  {
    id: 'farmasi-shop',
    icon: ShoppingCart,
    title: 'farmasi-onlineshop.ro',
    desc: 'Platformă e-commerce cu chatbot AI integrat (Gemini), catalog de 260+ produse, sistem de embeddings pentru căutare semantică și training pentru consultanți.',
    tags: ['React', 'Supabase', 'Claude AI', 'Gemini', 'pgvector'],
    category: 'web',
    link: 'https://farmasi-onlineshop.ro',
    highlight: 'Live',
  },
  {
    id: 'content-pipeline',
    icon: Workflow,
    title: 'Content Pipeline Farmasi',
    desc: 'Sistem AI care generează automat carousel-uri Instagram, video-uri TikTok și Reels — publicate pe 6 platforme simultan, fără intervenție manuală.',
    tags: ['n8n', 'Remotion', 'Kie.ai', 'FFmpeg', 'Supabase'],
    category: 'automatizari',
    highlight: '6 platforme',
  },
  {
    id: 'appsdigital',
    icon: Globe,
    title: 'appsdigitalmarket.ro',
    desc: 'Platformă de marketing digital pentru promovarea aplicațiilor și serviciilor. Integrări API, sistem de plăți și dashboard de management.',
    tags: ['React', 'Vite', 'shadcn/ui', 'Supabase'],
    category: 'web',
    link: 'https://appsdigitalmarket.ro',
    highlight: 'Live',
  },
  {
    id: 'refan',
    icon: Palette,
    title: 'parfumuri-refan.com',
    desc: 'Site de prezentare pentru rețeaua Refan cu catalog de parfumuri, sistem de consultanți și pagini de conversie pentru recrutare.',
    tags: ['React', 'Vite', 'TailwindCSS'],
    category: 'web',
    link: 'https://parfumuri-refan.com',
    highlight: 'Live',
  },
  {
    id: 'crm',
    icon: Users,
    title: 'CRM Network Marketing',
    desc: 'Sistem complet de management pentru rețele de parteneri: scoring leaduri, onboarding automatizat, rapoarte zilnice și dashboard pentru echipă.',
    tags: ['Node.js', 'Docker', 'Playwright', 'SQLite'],
    category: 'crm',
    highlight: 'Custom',
  },
  {
    id: 'wa-automation',
    icon: MessageSquare,
    title: 'Lead Automation cu WhatsApp',
    desc: 'Workflow complet: reclame Facebook → colectare date Google Sheets → mesaje automate WhatsApp → urmărire plăți Stripe/WooCommerce.',
    tags: ['n8n', 'Waha Plus', 'Stripe', 'WooCommerce', 'Facebook Ads'],
    category: 'automatizari',
    highlight: '0 manual',
  },
  {
    id: 'scraping',
    icon: Database,
    title: 'Sisteme de Scraping Date',
    desc: 'Automatizări pentru colectarea și analiza datelor de la concurenți: prețuri, produse, oferte — sincronizate automat în baze de date structurate.',
    tags: ['Playwright', 'Node.js', 'Supabase', 'Docker'],
    category: 'automatizari',
    highlight: 'Competitiv',
  },
  {
    id: 'waha',
    icon: MessageSquare,
    title: 'Waha Plus — WhatsApp API',
    desc: 'Infrastructură self-hosted pentru automatizare WhatsApp: trimitere mesaje în bulk, chatbot AI pentru răspunsuri automate și management conversații.',
    tags: ['Waha Plus', 'Docker', 'n8n', 'Claude AI'],
    category: 'automatizari',
    highlight: 'Self-hosted',
  },
]

const categories: { key: Category; label: string }[] = [
  { key: 'toate', label: 'Toate' },
  { key: 'automatizari', label: 'Automatizări' },
  { key: 'web', label: 'Web & Platforme' },
  { key: 'crm', label: 'CRM & Business' },
]

export default function Portfolio() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState<Category>('toate')

  const filtered = projects.filter((p) => active === 'toate' || p.category === active)

  return (
    <section id="portofoliu" className="py-28 px-6 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 20% 50%, rgba(0,212,255,0.04) 0%, transparent 60%)',
        }}
      />

      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4">
            // Portofoliu
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Sisteme construite{' '}
            <span className="gradient-text">și livrate</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Proiecte reale, în producție, care generează rezultate măsurabile.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === c.key
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white glow-cyan'
                  : 'glass text-slate-400 hover:text-white border border-white/5 hover:border-cyan-400/20'
              }`}
            >
              {c.label}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => {
              const Icon = p.icon
              return (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="glass rounded-2xl p-6 border-glow group flex flex-col"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center">
                      <Icon className="text-cyan-400" size={20} />
                    </div>
                    <div className="flex items-center gap-2">
                      {p.highlight && (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-purple-400/10 text-purple-400">
                          {p.highlight}
                        </span>
                      )}
                      {p.link && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-600 hover:text-cyan-400 transition-colors"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="font-semibold text-white mb-3 text-sm">{p.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">{p.desc}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-xs font-mono bg-white/5 text-slate-500"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
