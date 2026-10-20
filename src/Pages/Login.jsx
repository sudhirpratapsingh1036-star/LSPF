function Login() {
  return (
    <div className="page auth-page">
      <section className="auth-card">
        <h2>Welcome back</h2>
        <label className="field">
          <span>Email</span>
          <input type="email" placeholder="you@example.com" />
        </label>
        <label className="field">
          <span>Password</span>
          <input type="password" placeholder="Enter your password" />
        </label>
        <button type="button" className="primary-button">Login</button>
      </section>
    </div>
  )
}

export default Login
