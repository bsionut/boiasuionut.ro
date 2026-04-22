import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const techs = [
  { name: 'n8n', category: 'Automation', color: '#ea4b71' },
  { name: 'React', category: 'Frontend', color: '#61dafb' },
  { name: 'Supabase', category: 'Database', color: '#3ecf8e' },
  { name: 'Docker', category: 'Infra', color: '#2496ed' },
  { name: 'Claude AI', category: 'AI', color: '#7c3aed' },
  { name: 'Node.js', category: 'Backend', color: '#68a063' },
  { name: 'Remotion', category: 'Video', color: '#00d4ff' },
  { name: 'Waha Plus', category: 'WhatsApp', color: '#25d366' },
  { name: 'TypeScript', category: 'Language', color: '#3178c6' },
  { name: 'Playwright', category: 'Scraping', color: '#2ead33' },
  { name: 'PostgreSQL', category: 'Database', color: '#336791' },
  { name: 'Kie.ai', category: 'Image AI', color: '#ff6b6b' },
  { name: 'FFmpeg', category: 'Video', color: '#007808' },
  { name: 'Vite', category: 'Build', color: '#bd34fe' },
  { name: 'Gemini', category: 'AI', color: '#4285f4' },
  { name: 'Stripe', category: 'Payments', color: '#635bff' },
]

export default function TechStack() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-28 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(124,58,237,0.06) 0%, transparent 70%)',
        }}
      />

      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-4">
            // Stack tehnic
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Uneltele cu care{' '}
            <span className="gradient-text">construiesc</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Infrastructură self-hosted, AI de ultimă generație și automatizări care rulează 24/7.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="glass rounded-xl px-5 py-3 border border-white/5 hover:border-white/10 transition-all duration-200 group cursor-default"
              style={{
                ['--tech-color' as string]: tech.color,
              }}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="w-2 h-2 rounded-full animate-pulse-glow"
                  style={{ backgroundColor: tech.color }}
                />
                <span className="text-white text-sm font-medium group-hover:text-white transition-colors">
                  {tech.name}
                </span>
                <span className="text-slate-600 text-xs font-mono">{tech.category}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center"
        >
          {[
            { label: 'Self-hosted', desc: 'Totul rulează pe serverele tale. Zero dependențe cloud.' },
            { label: 'AI-powered', desc: 'Claude, Gemini, modele de imagine și video de ultimă generație.' },
            { label: '24/7 activ', desc: 'Sistemele nu se opresc. Muncesc cât dormi.' },
          ].map((item) => (
            <div key={item.label} className="glass-cyan rounded-xl p-5">
              <div className="text-cyan-400 font-semibold mb-2">{item.label}</div>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
