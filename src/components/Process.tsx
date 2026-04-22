import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Lightbulb, Bot, Layers, Send, TrendingUp } from 'lucide-react'

const steps = [
  {
    icon: Lightbulb,
    num: '01',
    title: 'Briefing & Strategie',
    desc: 'Analizăm produsul, audiența și obiectivele tale. Definim ce vrem să automatizăm și cum măsurăm succesul.',
  },
  {
    icon: Bot,
    num: '02',
    title: 'AI generează conținutul',
    desc: 'Sistemul AI produce texte, imagini și video-uri adaptate fiecărei platforme — fără intervenție manuală.',
  },
  {
    icon: Layers,
    num: '03',
    title: 'Asamblare automată',
    desc: 'Workflow-urile n8n asamblează materialele, le formatează corect și le pregătesc pentru publicare.',
  },
  {
    icon: Send,
    num: '04',
    title: 'Publicare pe 6 platforme',
    desc: 'Conținutul ajunge simultan pe TikTok, Instagram, Facebook, YouTube, LinkedIn și Pinterest.',
  },
  {
    icon: TrendingUp,
    num: '05',
    title: 'Leaduri & Conversii',
    desc: 'Sistemul captează leaduri, le scoriează automat și trimite mesaje personalizate pe WhatsApp.',
  },
]

export default function Process() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="proces" className="py-28 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none grid-bg"
        style={{ opacity: 0.4 }}
      />

      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-4">
            // Cum funcționează
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            De la idee la{' '}
            <span className="gradient-text">rezultat automat</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Un sistem integrat end-to-end. Tu te ocupi de business, sistemul se ocupă de tot restul.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-cyan-500/0 via-cyan-500/30 to-cyan-500/0" />

          <div className="flex flex-col gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon
              const isLeft = i % 2 === 0

              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className={`flex items-center gap-6 ${
                    isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-row`}
                >
                  <div className={`flex-1 ${isLeft ? 'lg:text-right' : 'lg:text-left'} text-left`}>
                    <div
                      className={`glass rounded-2xl p-6 border-glow inline-block w-full max-w-md ${
                        isLeft ? 'lg:ml-auto' : ''
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-mono text-cyan-400/50 text-xs">{step.num}</span>
                        <h3 className="font-semibold text-white">{step.title}</h3>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  <div className="hidden lg:flex w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-400/20 items-center justify-center flex-shrink-0 glow-cyan">
                    <Icon className="text-cyan-400" size={20} />
                  </div>

                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
