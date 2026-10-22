import { useState } from 'react'
import {Link} from 'react-router-dom'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex min-h-[60px] max-w-[1200px] flex-wrap items-center justify-between gap-x-6 px-4 py-2 sm:px-6 lg:flex-nowrap">
        <a className="flex shrink-0 items-center gap-1.5 text-[#18312d]" >
          <svg className="h-7 w-7 fill-emerald-600" viewBox="0 0 32 32" aria-hidden="true">
            <circle cx="16" cy="6" r="3.3" />
            <circle cx="7.5" cy="11" r="3.3" />
            <circle cx="24.5" cy="11" r="3.3" />
            <path d="M11 18c0-3 2.2-5 5-5s5 2 5 5v2h-10v-2ZM2.5 21c0-2.7 1.9-4.5 4.6-4.5 1.2 0 2.2.4 3 1.1-.7 1-1.1 2.3-1.1 3.8v2H2.5v-2.4ZM22.9 21c0-1.5-.4-2.8-1.1-3.8.8-.7 1.8-1.1 3-1.1 2.7 0 4.6 1.8 4.6 4.5V23h-6.5v-2Z" />
          </svg>
          <span className="text-base font-extrabold tracking-tight">LSPF</span>
          <span className="ml-1 hidden whitespace-nowrap text-[10px] text-slate-600 sm:inline">
            Local Sports Partner Finder
          </span>
        </a>

        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-700 hover:bg-slate-100 lg:hidden"
          type="button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {isMenuOpen ? (
              <path d="m6 6 12 12M18 6 6 18" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <nav
          id="main-navigation"
          className={`${isMenuOpen ? 'flex' : 'hidden'} w-full flex-col items-stretch gap-2 border-t border-slate-100 pt-3 lg:flex lg:w-auto lg:flex-1 lg:flex-row lg:items-center lg:justify-center lg:gap-6 lg:border-0 lg:pt-0`}
          aria-label="Main navigation"
        >
          <div className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-6">
            <a className="rounded px-2 py-2 text-xs font-semibold text-emerald-700 hover:text-emerald-800 lg:relative lg:px-0 lg:py-2 lg:after:absolute lg:after:inset-x-0 lg:after:bottom-0 lg:after:h-0.5 lg:after:rounded lg:after:bg-emerald-600" href="/" aria-current="page">Home</a>
            <a className="rounded px-2 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-emerald-700 lg:px-0 lg:py-2 lg:hover:bg-transparent" href="#players">Find Players</a>
            <a className="rounded px-2 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-emerald-700 lg:px-0 lg:py-2 lg:hover:bg-transparent" href="#matches">Find Matches</a>
            <a className="rounded px-2 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-emerald-700 lg:px-0 lg:py-2 lg:hover:bg-transparent" href="#create-match">Create Match</a>
            <a className="rounded px-2 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-emerald-700 lg:px-0 lg:py-2 lg:hover:bg-transparent" href="#about">About</a>
          </div>
          

          <div className="flex items-center gap-2 border-t border-slate-100 pt-3 lg:hidden">
            <a className="flex-1 rounded-md border border-slate-300 px-3 py-2 text-center text-xs font-semibold text-slate-700" href="#login">Login</a>
            <a className="flex-1 rounded-md bg-emerald-600 px-3 py-2 text-center text-xs font-semibold text-white hover:bg-emerald-700" href="#signup">Sign Up</a>
          </div>
        </nav>
        <button className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-800 hover:bg-slate-600 " type="button" aria-label="Search">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" >
            <circle cx="10.8" cy="10.8" r="5.5" />
            <path d="m15 15 4.2 4.2" />
          </svg>
        </button>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <Link className="rounded-md border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50" to="/login">Login</Link>
          <Link className="rounded-md bg-emerald-600 px-3 py-2 text-xs font-semibold text-white hover:bg-emerald-700" to="/signup">Sign Up</Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar