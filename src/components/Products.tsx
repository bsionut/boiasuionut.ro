import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Coins, Calendar, MessageSquare, Wand2, Film, ShoppingBag, Users } from 'lucide-react'

interface Product {
  id: string
  name: string
  tagline: string
  description: string
  features: { icon: typeof Calendar; text: string }[]
  pricing: string
  pricingDetail: string
  accentColor: string
  borderClass: string
  bgClass: string
  tagClass: string
  link: string
  cta: string
}

const products: Product[] = [
  {
    id: 'appsdigital',
    name: 'Apps Digital Market',
    tagline: 'Aplicații SaaS gata de folosit',
    description:
      'Platformă cu aplicații web pentru automatizarea proceselor de business — de la programări la comunicare automată cu clienții.',
    features: [
      { icon: Calendar, text: 'Programări online pentru cabinete medicale și saloane' },
      { icon: MessageSquare, text: 'WhatsApp Sender cu API — integrat direct în n8n' },
      { icon: Coins, text: 'Dashboard management credite și utilizare' },
    ],
    pricing: 'Credite lunare',
    pricingDetail: 'Plătești doar ce folosești',
    accentColor: '#7c3aed',
    borderClass: 'border-glow-purple',
    bgClass: 'bg-purple-400/10',
    tagClass: 'bg-purple-400/10 text-purple-400',
    link: 'https://appsdigitalmarket.ro',
    cta: 'Explorează aplicațiile',
  },
  {
    id: 'creativeai',
    name: 'Creative AI Studio',
    tagline: 'Generator AI de imagini & video',
    description:
      'Platformă unificată pentru crearea de conținut vizual cu cele mai avansate modele AI — imagini, video-uri și animații în câteva secunde.',
    features: [
      { icon: Wand2, text: 'Nano Banana, Nano Banana 2 — imagini premium' },
      { icon: Film, text: 'Veo 3.1, Seedance, Kling — video AI de ultimă generație' },
      { icon: Coins, text: '20+ modele disponibile, credite flexibile per generare' },
    ],
    pricing: 'Pachete de credite',
    pricingDetail: 'Fără abonament forțat',
    accentColor: '#00d4ff',
    borderClass: 'border-glow',
    bgClass: 'bg-cyan-400/10',
    tagClass: 'bg-cyan-400/10 text-cyan-400',
    link: 'https://creativeai-studio.com',
    cta: 'Generează conținut AI',
  },
  {
    id: 'farmasi',
    name: 'Farmasi Shop & Hub',
    tagline: 'Resurse complete pentru parteneri Farmasi',
    description:
      'Platformă dedicată partenerilor Farmasi cu catalog de produse, chatbot AI pentru recomandări, training și sistem de înregistrare parteneri noi.',
    features: [
      { icon: ShoppingBag, text: 'Catalog 260+ produse cu căutare semantică AI' },
      { icon: Users, text: 'Înscriere parteneri noi și onboarding automat' },
      { icon: MessageSquare, text: 'Chatbot AI — răspunde la întrebări despre produse 24/7' },
    ],
    pricing: 'Gratuit',
    pricingDetail: 'Resursă pentru echipă',
    accentColor: '#00ffcc',
    borderClass: 'border-glow',
    bgClass: 'bg-emerald-400/10',
    tagClass: 'bg-emerald-400/10 text-emerald-400',
    link: 'https://farmasi-onlineshop.ro',
    cta: 'Accesează platforma',
  },
]

export default function Products() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="produse" className="py-28 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(0,212,255,0.04) 0%, transparent 70%)',
        }}
      />
      <div className="absolute inset-0 pointer-events-none grid-bg" style={{ opacity: 0.3 }} />

      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4">
            // Produse & Platforme
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Aplicații pe care le-am{' '}
            <span className="gradient-text">construit și lansat</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Nu doar construiesc pentru alții — am propriile platforme SaaS active,
            disponibile acum pentru oricine are nevoie.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {products.map((p, i) => {
            const isMiddle = i === 1
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`glass rounded-2xl ${p.borderClass} flex flex-col relative overflow-hidden
                  ${isMiddle ? 'lg:-mt-4 lg:mb-4' : ''}
                `}
              >
                {isMiddle && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-cyan-500 to-purple-600" />
                )}

                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono mb-3 ${p.tagClass}`}>
                        {p.pricing} — {p.pricingDetail}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-1">{p.name}</h3>
                      <p className="text-slate-500 text-sm font-mono">{p.tagline}</p>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {p.description}
                  </p>

                  <div className="flex flex-col gap-3 flex-1">
                    {p.features.map((f, fi) => {
                      const Icon = f.icon
                      return (
                        <div key={fi} className="flex items-start gap-3">
                          <div
                            className={`w-7 h-7 rounded-lg ${p.bgClass} flex items-center justify-center flex-shrink-0 mt-0.5`}
                          >
                            <Icon size={13} style={{ color: p.accentColor }} />
                          </div>
                          <span className="text-slate-400 text-sm leading-snug">{f.text}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="px-8 pb-8">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                    style={{
                      background: `linear-gradient(135deg, ${p.accentColor}22 0%, ${p.accentColor}11 100%)`,
                      border: `1px solid ${p.accentColor}33`,
                      color: p.accentColor,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background =
                        `linear-gradient(135deg, ${p.accentColor}33 0%, ${p.accentColor}22 100%)`
                      ;(e.currentTarget as HTMLAnchorElement).style.borderColor =
                        `${p.accentColor}66`
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background =
                        `linear-gradient(135deg, ${p.accentColor}22 0%, ${p.accentColor}11 100%)`
                      ;(e.currentTarget as HTMLAnchorElement).style.borderColor =
                        `${p.accentColor}33`
                    }}
                  >
                    {p.cta}
                    <ArrowRight
                      size={15}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-slate-600 text-sm font-mono mt-10"
        >
          // Vrei o aplicație similară pentru business-ul tău?{' '}
          <a href="#contact" className="text-cyan-400/70 hover:text-cyan-400 transition-colors">
            Hai să vorbim →
          </a>
        </motion.p>
      </div>
    </section>
  )
}
