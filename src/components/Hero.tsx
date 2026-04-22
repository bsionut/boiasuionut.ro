import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import ParticleCanvas from './ParticleCanvas'
import { WA_LINK } from '../config'

interface Stat {
  value: number
  suffix: string
  label: string
}

const stats: Stat[] = [
  { value: 10, suffix: '+', label: 'Proiecte livrate' },
  { value: 6, suffix: '', label: 'Platforme automatizate' },
  { value: 100, suffix: '%', label: 'Fără intervenție manuală' },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1500
          const step = Math.ceil(target / (duration / 16))
          let current = 0
          const timer = setInterval(() => {
            current = Math.min(current + step, target)
            setCount(current)
            if (current >= target) clearInterval(timer)
          }, 16)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref} className="gradient-text-cyan text-4xl font-bold font-mono">
      {count}{suffix}
    </span>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      <ParticleCanvas />

      <div className="hero-radial-bg absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-cyan text-cyan-400 text-xs font-mono mb-8 tracking-widest uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse-glow" />
          Automatizări pentru Network Marketeri
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
        >
          Boiasu{' '}
          <span className="gradient-text">Ionuț</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl sm:text-3xl font-semibold text-white mb-4"
        >
          Automatizez afaceri.{' '}
          <span className="gradient-text-cyan">Scalez rețele.</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Construiesc sisteme AI care generează conținut, gestionează leaduri și publică automat
          pe toate platformele — fără ca tu să ridici un deget.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full font-semibold text-white bg-linear-to-r from-cyan-500 to-purple-600 glow-cyan hover:opacity-90 transition-all duration-200 hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-2"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Hai să vorbim
          </a>
          <a
            href="#portofoliu"
            className="px-8 py-4 rounded-full font-semibold text-cyan-400 border border-cyan-400/30 hover:border-cyan-400/60 hover:bg-cyan-400/5 transition-all duration-200 inline-flex items-center justify-center"
          >
            Vezi proiectele
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-3 gap-6 max-w-xl mx-auto"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1">
              <CountUp target={s.value} suffix={s.suffix} />
              <span className="text-xs text-slate-500 text-center">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <a
        href="#servicii"
        aria-label="Derulează la secțiunea servicii"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 hover:text-cyan-400 transition-colors animate-float"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  )
}
