export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center text-white font-bold text-xs">
            IB
          </div>
          <span className="text-slate-500 text-sm">Boiasu Ionuț</span>
        </div>
        <p className="text-slate-600 text-xs font-mono">
          © {new Date().getFullYear()} — Automatizări pentru Network Marketeri
        </p>
        <div className="flex items-center gap-1 text-slate-600 text-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span>Sisteme active 24/7</span>
        </div>
      </div>
    </footer>
  )
}
