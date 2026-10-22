import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../Components/Footer'
import Navbar from '../Components/Navbar'
import sunset from '../assets/sunset.png'

const sports = [
  { name: 'Cricket', icon: '🏏' },
  { name: 'Football', icon: '⚽' },
  { name: 'Badminton', icon: '🏸' },
  { name: 'Tennis', icon: '🎾' },
  { name: 'Basketball', icon: '🏀' },
  { name: 'Table Tennis', icon: '🏓' },
  { name: 'Volleyball', icon: '🏐' },
  { name: 'Others', icon: '•••' },
]

const players = [
  {
    name: 'Rohan Singh',
    sport: 'Badminton',
    location: 'Lucknow',
    distance: '2.3 km',
    level: 'Intermediate',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Priya Sharma',
    sport: 'Tennis',
    location: 'Lucknow',
    distance: '3.1 km',
    level: 'Advanced',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Aman Verma',
    sport: 'Football',
    location: 'Lucknow',
    distance: '4.2 km',
    level: 'Intermediate',
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
  {
    name: 'Sneha Gupta',
    sport: 'Cricket',
    location: 'Lucknow',
    distance: '5.6 km',
    level: 'Beginner',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
]

const matches = [
  {
    sport: 'Badminton',
    date: '22 Oct 2025 · 5:00 PM',
    venue: 'India Nagar Sports Complex',
    spots: '4/8 slots',
    image:
      'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=700&q=80',
  },
  {
    sport: 'Football',
    date: '23 Oct 2025 · 6:00 PM',
    venue: 'Green Garden Ground',
    spots: '7/10 slots',
    image:
      'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=700&q=80',
  },
  {
    sport: 'Cricket',
    date: '24 Oct 2025 · 4:30 PM',
    venue: 'Riverside Cricket Ground',
    spots: '10/12 slots',
    image:
      'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=700&q=80',
  },
  {
    sport: 'Tennis',
    date: '25 Oct 2025 · 7:00 PM',
    venue: 'KD Singh Babu Stadium',
    spots: '2/6 slots',
    image:
      'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=700&q=80',
  },
]

const features = [
  {
    icon: '👥',
    title: 'Find Local Players',
    description: 'Connect with sports partners near you.',
    color: 'bg-emerald-600',
  },
  {
    icon: '▦',
    title: 'Join & Organize Matches',
    description: 'Discover or create matches in your area.',
    color: 'bg-blue-600',
  },
  {
    icon: '♟',
    title: 'Build Your Team',
    description: 'Find teammates for your favourite sport.',
    color: 'bg-violet-600',
  },
  {
    icon: '🏆',
    title: 'Safe & Trusted',
    description: 'Verified users and report system for a safer community.',
    color: 'bg-orange-500',
  },
]

const Home = () => {
  const [selectedSport, setSelectedSport] = useState('All Sports')
  const [location, setLocation] = useState('')
  const [activeSport, setActiveSport] = useState('')

  const visiblePlayers = useMemo(() => {
    const sport = activeSport || selectedSport
    const query = location.trim().toLowerCase()

    return players.filter((player) => {
      const matchesSport = sport === 'All Sports' || player.sport === sport
      const matchesLocation = !query || player.location.toLowerCase().includes(query)
      return matchesSport && matchesLocation
    })
  }, [activeSport, location, selectedSport])

  const handleSearch = (event) => {
    event.preventDefault()
    setActiveSport('')
    document.getElementById('players')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Navbar />
      <main>
        <section
          className="relative isolate min-h-[390px] overflow-hidden bg-cover bg-center text-white sm:min-h-[430px]"
          style={{ backgroundImage: `url(${sunset})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/10" />
          <div className="relative z-10 mx-auto flex min-h-[390px] max-w-7xl items-center px-5 py-12 sm:min-h-[430px] sm:px-8 lg:px-10">
            <div className="max-w-xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
                Play <span className="px-1">·</span> Connect <span className="px-1">·</span> Grow
              </p>
              <h1 className="max-w-lg text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
                Find Your Sports Partners <span className="text-emerald-400">Locally</span>
              </h1>
              <p className="mt-4 max-w-md text-sm leading-6 text-slate-100 sm:text-base">
                Join a community of sports enthusiasts. Find players, join matches, or create your own — all in your local area.
              </p>

              <form
                className="mt-7 grid gap-2 rounded-xl bg-white p-2 shadow-xl sm:grid-cols-[1fr_1fr_auto] sm:gap-1"
                onSubmit={handleSearch}
              >
                <label className="flex min-h-12 items-center gap-3 rounded-lg px-3 text-slate-500 sm:border-r sm:border-slate-200">
                  <span aria-hidden="true" className="text-lg text-emerald-600">⚽</span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[10px] font-semibold uppercase tracking-wide text-slate-500">Select sport</span>
                    <select
                      className="w-full bg-transparent text-xs font-medium text-slate-800 outline-none"
                      value={selectedSport}
                      onChange={(event) => {
                        setSelectedSport(event.target.value)
                        setActiveSport('')
                      }}
                      aria-label="Select a sport"
                    >
                      <option>All Sports</option>
                      {sports.map(({ name }) => <option key={name}>{name}</option>)}
                    </select>
                  </span>
                </label>
                <label className="flex min-h-12 items-center gap-3 rounded-lg px-3 text-slate-500">
                  <span aria-hidden="true" className="text-lg text-emerald-600">⌖</span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[10px] font-semibold uppercase tracking-wide text-slate-500">Your location</span>
                    <input
                      className="w-full bg-transparent text-xs font-medium text-slate-800 outline-none placeholder:text-slate-400"
                      placeholder="e.g. Lucknow"
                      value={location}
                      onChange={(event) => setLocation(event.target.value)}
                      aria-label="Your location"
                    />
                  </span>
                </label>
                <button
                  className="rounded-lg bg-emerald-600 px-6 py-3 text-xs font-bold text-white transition hover:bg-emerald-700 sm:px-7"
                  type="submit"
                >
                  Find Players
                </button>
              </form>
            </div>
            <p className="absolute bottom-8 right-8 hidden max-w-32 rotate-[-8deg] text-2xl font-semibold italic leading-7 text-white drop-shadow-lg lg:block">
              Same Passion, Different People
            </p>
          </div>
        </section>

        <section id="about" className="bg-white px-5 py-8 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-5">
              <h2 className="text-xl font-bold text-slate-900">Why Choose LSPF?</h2>
              <p className="mt-1 text-sm text-slate-500">Because sports are better together!</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {features.map(({ icon, title, description, color }) => (
                <article key={title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-full text-lg font-bold text-white ${color}`} aria-hidden="true">
                    {icon}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-500">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-emerald-50/70 px-5 py-8 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Popular Sports</h2>
                <p className="mt-1 text-sm text-slate-500">Find partners for your favourite sport.</p>
              </div>
              <a className="text-xs font-semibold text-emerald-700 hover:text-emerald-800" href="#players">View all sports <span aria-hidden="true">→</span></a>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
              {sports.map(({ name, icon }) => (
                <button
                  className={`flex min-h-[86px] flex-col items-center justify-center gap-2 rounded-xl border px-2 py-3 transition hover:border-emerald-300 hover:bg-emerald-50 ${activeSport === name ? 'border-emerald-500 bg-emerald-50' : 'border-transparent bg-white'}`}
                  key={name}
                  onClick={() => setActiveSport(activeSport === name ? '' : name)}
                  type="button"
                  aria-pressed={activeSport === name}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-xl" aria-hidden="true">{icon}</span>
                  <span className="text-xs font-semibold text-slate-700">{name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="players" className="bg-white px-5 py-8 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Nearby Players</h2>
                <p className="mt-1 text-sm text-slate-500">Connect with players in your area</p>
              </div>
              <Link className="text-xs font-semibold text-emerald-700 hover:text-emerald-800" to="/find-player">View all <span aria-hidden="true">→</span></Link>
            </div>
            {visiblePlayers.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {visiblePlayers.map((player) => (
                  <article key={player.name} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">
                    <div className="flex items-center gap-3">
                      <img className="h-14 w-14 rounded-full object-cover" src={player.avatar} alt="" />
                      <div className="min-w-0">
                        <h3 className="truncate text-sm font-bold text-slate-900">{player.name} <span className="text-emerald-500" aria-label="Verified">●</span></h3>
                        <p className="mt-1 text-xs text-slate-500">⌖ {player.distance} away</p>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-600">
                      <span className="rounded-full bg-slate-100 px-2.5 py-1">{player.sport}</span>
                      <span className="rounded-full bg-blue-50 px-2.5 py-1 text-blue-700">{player.level}</span>
                    </div>
                    <a className="mt-4 block rounded-md bg-emerald-600 py-2.5 text-center text-xs font-bold text-white transition hover:bg-emerald-700" href="#signup">Connect</a>
                  </article>
                ))}
              </div>
            ) : (
              <p className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-sm text-slate-600">
                No players found for this selection. Try another sport or location.
              </p>
            )}
          </div>
        </section>

        <section id="matches" className="bg-slate-50 px-5 py-8 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Recent Matches</h2>
                <p className="mt-1 text-sm text-slate-500">Join matches happening near you</p>
              </div>
              <Link className="text-xs font-semibold text-emerald-700 hover:text-emerald-800" to="/find-matches">View all matches <span aria-hidden="true">→</span></Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {matches.map((match) => (
                <article key={match.sport} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                  <img className="h-24 w-full object-cover" src={match.image} alt={`${match.sport} match`} />
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-emerald-700">{match.sport}</h3>
                    <p className="mt-2 text-xs text-slate-600">◷ {match.date}</p>
                    <p className="mt-1 truncate text-xs text-slate-600">⌖ {match.venue}</p>
                    <div className="mt-3 flex items-center justify-between gap-2 border-t border-slate-100 pt-3">
                      <span className="text-xs text-slate-500">♧ {match.spots}</span>
                      <a className="rounded-md bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-700" href="#signup">Join</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home
