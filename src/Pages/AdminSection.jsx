function AdminSection() {
  return (
    <div className="page admin-page">
      <section className="section-block">
        <div className="section-heading">
          <h2>Admin controls</h2>
        </div>

        <div className="admin-grid">
          <button type="button" className="panel-button">Approve matches</button>
          <button type="button" className="panel-button">Manage teams</button>
          <button type="button" className="panel-button">Review players</button>
          <button type="button" className="panel-button">Analytics</button>
        </div>
      </section>
    </div>
  )
}

export default AdminSection
