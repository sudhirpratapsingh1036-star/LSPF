function Login() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-emerald-50 p-3 sm:p-4">
      <section className="w-full max-w-md rounded-2xl bg-white p-5 shadow-xl sm:p-7">
        <h1 className="text-center text-2xl font-bold text-slate-900">
          Welcome back
        </h1>
        <p className="mb-5 mt-1 text-center text-sm text-slate-600">
          Login to find your people and play.
        </p>
        <form className="space-y-3">
          <fieldset>
            <legend className="mb-2 block text-sm font-bold text-slate-700">Login as</legend>
            <div className="grid grid-cols-2 gap-3">
              <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-emerald-200 p-3 text-sm text-slate-700 hover:bg-emerald-50">
                <input
                  className="accent-emerald-600"
                  type="radio"
                  name="role"
                  value="user"
                  defaultChecked
                />
                User
              </label>
              <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-emerald-200 p-3 text-sm text-slate-700 hover:bg-emerald-50">
                <input
                  className="accent-emerald-600"
                  type="radio"
                  name="role"
                  value="admin"
                />
                Admin
              </label>
            </div>
          </fieldset>
          <div>
            <label className="mb-1 block text-sm font-bold text-slate-700" htmlFor="email">
              Email
            </label>
            <input
              className="w-full rounded border border-slate-200 px-3 py-2 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              id="email"
              type="email"
              placeholder="you@example.com"
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
              placeholder="Enter your password"
            />
          </div><br></br>
          <button
            className="w-full rounded bg-emerald-600 px-4 py-2 font-bold text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            type="button"
          >
            Login
          </button>
        </form>
      </section>
    </div>
  )
}

export default Login
