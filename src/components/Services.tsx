import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, Users, Globe, BarChart3 } from 'lucide-react'

const services = [
  {
    icon: Zap,
    color: 'cyan',
    title: 'Content Automation',
    desc: 'Carousel-uri, video-uri, reels — generate automat cu AI și publicate pe TikTok, Instagram, Facebook, YouTube, LinkedIn și Pinterest.',
    tags: ['n8n', 'Claude AI', 'Remotion', 'Kie.ai'],
  },
  {
    icon: Users,
    color: 'purple',
    title: 'CRM & Lead Management',
    desc: 'Sisteme complete de urmărire parteneri, scoring automat al leadurilor, onboarding automatizat și notificări WhatsApp în timp real.',
    tags: ['Supabase', 'WhatsApp API', 'n8n', 'Stripe'],
  },
  {
    icon: Globe,
    color: 'neon',
    title: 'Platforme Web & AI',
    desc: 'Site-uri de prezentare cu chatbot AI integrat, cataloage de produse, dashboard-uri pentru echipe și sisteme de onboarding digital.',
    tags: ['React', 'Supabase', 'Claude AI', 'Vite'],
  },
  {
    icon: BarChart3,
    color: 'cyan',
    title: 'Automatizări Business',
    desc: 'Colectare date din Google Sheets, reclame Facebook cu mesaje automate pe WhatsApp, integrări Stripe/WooCommerce și scraping competitori.',
    tags: ['n8n', 'Waha Plus', 'Playwright', 'Docker'],
  },
]

const colorMap = {
  cyan: {
    icon: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    tag: 'bg-cyan-400/10 text-cyan-400',
    border: 'border-glow',
  },
  purple: {
    icon: 'text-purple-400',
    bg: 'bg-purple-400/10',
    tag: 'bg-purple-400/10 text-purple-400',
    border: 'border-glow-purple',
  },
  neon: {
    icon: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    tag: 'bg-emerald-400/10 text-emerald-400',
    border: 'border-glow',
  },
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="servicii" className="py-28 px-6 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(124,58,237,0.05) 0%, transparent 70%)',
        }}
      />

      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4">
            // Ce construiesc
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Sisteme care{' '}
            <span className="gradient-text">muncesc pentru tine</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Nu vând tool-uri. Construiesc infrastructuri complete care automatizează întreg fluxul tău de business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => {
            const c = colorMap[s.color as keyof typeof colorMap]
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`glass rounded-2xl p-8 ${c.border} group cursor-default`}
              >
                <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center mb-6`}>
                  <Icon className={c.icon} size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{s.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-6">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className={`px-3 py-1 rounded-full text-xs font-mono ${c.tag}`}>
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
