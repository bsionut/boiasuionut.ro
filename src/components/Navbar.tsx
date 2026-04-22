import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { WA_LINK } from '../config'

const links = [
  { label: 'Servicii', href: '#servicii' },
  { label: 'Produse', href: '#produse' },
  { label: 'Proiecte', href: '#portofoliu' },
  { label: 'Despre mine', href: '#despre' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass border-b border-white/5' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-linear-to-br from-cyan-400 to-purple-600 flex items-center justify-center text-white font-bold text-sm glow-cyan">
              IB
            </div>
            <span className="font-semibold text-white hidden sm:block tracking-wide">
              Boiasu Ionuț
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-linear-to-r from-cyan-500 to-purple-600 text-white glow-cyan hover:opacity-90 transition-opacity"
            >
              Hai să vorbim
            </a>
            <button
              type="button"
              aria-label="Deschide meniu"
              className="md:hidden text-slate-400 hover:text-white"
              onClick={() => setOpen(true)}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-50 glass flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-semibold text-white text-lg">Boiasu Ionuț</span>
              <button
                type="button"
                aria-label="Închide meniu"
                className="text-slate-400 hover:text-white"
                onClick={() => setOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-medium text-white hover:text-cyan-400 transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto px-6 py-3 rounded-full text-center font-medium bg-linear-to-r from-cyan-500 to-purple-600 text-white"
            >
              Hai să vorbim pe WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
