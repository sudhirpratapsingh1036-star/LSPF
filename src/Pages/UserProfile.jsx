function UserProfile() {
  return (
    <div className="page profile-page">
      <section className="profile-card">
        <div className="profile-avatar">JD</div>
        <div>
          <p className="eyebrow">Club manager</p>
          <h2>Jordan Diaz</h2>
          <p>Harbor City FC • Manager</p>
        </div>
      </section>

      <section className="section-block stats-grid">
        <div className="stat-card">
          <span>Matches this season</span>
          <strong>24</strong>
        </div>
        <div className="stat-card">
          <span>Wins</span>
          <strong>15</strong>
        </div>
        <div className="stat-card">
          <span>Goals scored</span>
          <strong>38</strong>
        </div>
      </section>
    </div>
  )
}

export default UserProfile
