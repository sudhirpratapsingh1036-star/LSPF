function SignUp() {
  return (
    <div className="page auth-page">
      <section className="auth-card">
        <h2>Create your account</h2>
        <label className="field">
          <span>Full name</span>
          <input type="text" placeholder="Jane Smith" />
        </label>
        <label className="field">
          <span>Email</span>
          <input type="email" placeholder="you@example.com" />
        </label>
        <label className="field">
          <span>Password</span>
          <input type="password" placeholder="Create a password" />
        </label>
        <button type="button" className="primary-button">Sign up</button>
      </section>
    </div>
  )
}

export default SignUp
