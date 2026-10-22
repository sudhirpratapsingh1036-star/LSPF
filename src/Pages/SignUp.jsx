import {Link} from 'react-router-dom'
import Login from '../Pages/Login.jsx'


function SignUp() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-emerald-50 p-3 sm:p-4">
      <section className="w-full max-w-2xl rounded-2xl bg-white p-5 shadow-xl sm:p-7">
        <h1 className="text-center text-2xl font-bold text-slate-900">
          Join the Game
        </h1>
        <p className="mb-5 mt-1 text-center text-sm text-slate-600">Find your people. Play your sport.</p>
        <form className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-bold text-slate-700" htmlFor="username">
              Username
            </label>
            <input
              className="w-full rounded border border-slate-200 px-3 py-2 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-bold text-slate-700" htmlFor="email">
              Email
            </label>
            <input
              className="w-full rounded border border-slate-200 px-3 py-2 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-bold text-slate-700" htmlFor="password">
              Password
            </label>
            <input
              className="w-full rounded border border-slate-200 px-3 py-2 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
           <div>
            <label className="mb-1 block text-sm font-bold text-slate-700" htmlFor="confirm-password">
             Confirm Password
            </label>
            <input
              className="w-full rounded border border-slate-200 px-3 py-2 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              id="confirm-password"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <div>
  <label className="mb-1 block text-sm font-bold text-slate-700" htmlFor="favorite-sport">
    Favourite Sport
  </label>

  <select
    id="favorite-sport"
    name="favoriteSport"
    className="w-full rounded-lg border border-emerald-200 bg-white px-3 py-2 text-slate-700 outline-none focus:ring-2 focus:ring-emerald-500"
    defaultValue=""
  >
    <option value="" disabled>
      Select your favourite sport
    </option>

    <option value="cricket">Cricket</option>
    <option value="football">Football</option>
    <option value="badminton">Badminton</option>
    <option value="basketball">Basketball</option>
    <option value="volleyball">Volleyball</option>
    <option value="tennis">Tennis</option>
    <option value="table-tennis">Table Tennis</option>
    <option value="kabaddi">Kabaddi</option>
    <option value="other">Other</option>
  </select>
</div>
          <div>
  <label className="mb-1 block text-sm font-bold text-slate-700" htmlFor="skill-level">
    Skill Level
  </label>

  <select
    id="skill-level"
    name="skillLevel"
    className="w-full rounded-lg border border-emerald-200 bg-white px-3 py-2 text-slate-700 outline-none focus:ring-2 focus:ring-emerald-500"
    defaultValue=""
  >
    <option value="" disabled>
      Select your skill level
    </option>
    <option value="beginner">Beginner</option>
    <option value="intermediate">Intermediate</option>
    <option value="advanced">Advanced</option>
  </select>
</div>
          <div className="flex items-center justify-between sm:col-span-2">
            <button
              className="bg-emerald-600 mx-66 my-1 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign Up
            </button>
          </div>
        </form>

      </section>
    </div>
  );
}

export default SignUp;
