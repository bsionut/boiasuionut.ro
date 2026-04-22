import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const points = [
  'Am construit aceste sisteme pentru propriul meu business Farmasi',
  'Înțeleg provocările unui Network Marketer — nu sunt doar un programator',
  'Fiecare sistem livrat este testat în producție reală',
  'Suport tehnic și îmbunătățiri continue după livrare',
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="despre" className="py-28 px-6 relative">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4">
              // Despre mine
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Nu sunt doar un developer.{' '}
              <span className="gradient-text">Sunt Network Marketer.</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Am pornit construind automatizări pentru propriul meu business Farmasi — sisteme care
              generează conținut, gestionează parteneri și automatizează comunicarea cu clienții.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Acum ofer aceleași sisteme și altor Network Marketeri și antreprenori care vor să
              scaleze fără să angajeze o echipă întreagă. Dacă muncești în rețea de distribuție,
              știu exact ce ai nevoie — pentru că am trecut prin asta.
            </p>
            <div className="flex flex-col gap-3">
              {points.map((p, i) => (
                <motion.div
                  key={p}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="text-cyan-400 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-slate-300 text-sm">{p}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-5"
          >
            <div className="glass rounded-2xl p-8 border-glow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-white font-bold glow-cyan">
                  IB
                </div>
                <div>
                  <div className="text-white font-semibold">Boiasu Ionuț</div>
                  <div className="text-slate-500 text-sm font-mono">Automation Engineer</div>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed italic">
                "Cel mai bun angajat pe care îl poți avea lucrează 24/7, nu cere concediu și
                nu face greșeli. Se numește automatizare."
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '2+', label: 'Ani de experiență în automatizări' },
                { value: '10+', label: 'Sisteme livrate în producție' },
                { value: '6', label: 'Platforme sociale acoperite' },
                { value: '∞', label: 'Scalabilitate fără angajări' },
              ].map((stat) => (
                <div key={stat.label} className="glass rounded-xl p-5 border-glow-purple">
                  <div className="text-2xl font-bold gradient-text-cyan mb-1 font-mono">
                    {stat.value}
                  </div>
                  <div className="text-slate-500 text-xs leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
