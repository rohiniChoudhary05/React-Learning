import "./Dashboard.css"
const Dashboard = () => {
  return (
     <div className="dashboard">
      <aside className="sidebar">
        <h2>My Dashboard</h2>

        <ul>
          <li>Home</li>
          <li>Users</li>
          <li>Reports</li>
          <li>Settings</li>
        </ul>
      </aside>

      <main className="main-content">
        <nav className="navbar">
          <h2>Overview</h2>
          <p>Welcome, Rohini!</p>
        </nav>

        <div className="cards">
          <div className="card">
            <h3>Total Users</h3>
            <p>1,250</p>
          </div>

          <div className="card">
            <h3>Revenue</h3>
            <p>₹25,000</p>
          </div>

          <div className="card">
            <h3>Orders</h3>
            <p>320</p>
          </div>

          <div className="card">
            <h3>Growth</h3>
            <p>85%</p>
          </div>
        </div>

        <section className="activity">
          <h2>Recent Activity</h2>
          <p>New user registered</p>
          <p>New order received</p>
          <p>Report generated</p>
        </section>
      </main>
    </div>
  )
}

export default Dashboard
