import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="bg-slate-900 px-5 py-7 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <svg className="h-7 w-7 fill-emerald-400" viewBox="0 0 32 32" aria-hidden="true">
              <circle cx="16" cy="6" r="3.3" />
              <circle cx="7.5" cy="11" r="3.3" />
              <circle cx="24.5" cy="11" r="3.3" />
              <path d="M11 18c0-3 2.2-5 5-5s5 2 5 5v2h-10v-2ZM2.5 21c0-2.7 1.9-4.5 4.6-4.5 1.2 0 2.2.4 3 1.1-.7 1-1.1 2.3-1.1 3.8v2H2.5v-2.4ZM22.9 21c0-1.5-.4-2.8-1.1-3.8.8-.7 1.8-1.1 3-1.1 2.7 0 4.6 1.8 4.6 4.5V23h-6.5v-2Z" />
            </svg>
            <span className="text-base font-extrabold tracking-tight">LSPF</span>
            <span className="hidden text-xs text-slate-300 sm:inline">Local Sports Partner Finder</span>
          </div>
         
        </div>
        <div className="flex flex-col gap-2 pt-5 text-[11px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Play local. Meet new people. Stay active.</p>
          <p>© 2025 LSPF. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
