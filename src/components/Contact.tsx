import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageCircle, ArrowRight, Mail } from 'lucide-react'
import { WA_LINK_WITH_MESSAGE } from '../config'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      <div className="contact-grid-bg absolute inset-0 pointer-events-none" />
      <div className="contact-radial-bg absolute inset-0 pointer-events-none" />

      <div ref={ref} className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4">
            // Hai să colaborăm
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Automatizăm{' '}
            <span className="gradient-text">afacerea ta</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            Spune-mi în câteva cuvinte ce vrei să automatizezi și îți spun dacă și cum pot ajuta.
            Răspund pe WhatsApp în maxim câteva ore.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href={WA_LINK_WITH_MESSAGE}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-5 rounded-2xl font-semibold text-white bg-linear-to-r from-cyan-500 to-purple-600 glow-cyan hover:opacity-90 transition-all duration-200 hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-3 text-lg"
          >
            <MessageCircle size={22} />
            Scrie-mi pe WhatsApp
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="mailto:bsionut@gmail.com"
            className="px-8 py-5 rounded-2xl font-medium text-slate-400 border border-white/10 hover:border-cyan-400/30 hover:text-white hover:bg-white/5 transition-all duration-200 inline-flex items-center justify-center gap-3 text-lg"
          >
            <Mail size={20} />
            Email
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass rounded-2xl p-6 border-glow max-w-lg mx-auto"
        >
          <p className="text-slate-500 text-sm font-mono mb-3">// Ce să îmi spui</p>
          <div className="flex flex-col gap-2 text-left">
            {[
              'Cu ce te ocupi (network marketing, e-commerce, servicii...)',
              'Ce vrei să automatizezi sau ce problemă ai',
              'Cât timp petreci acum pe taskul respectiv',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-slate-400">
                <span className="text-cyan-400/50 font-mono text-xs mt-0.5">{i + 1}.</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
