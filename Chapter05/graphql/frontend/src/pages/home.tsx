import { Link } from 'react-router-dom'

const Home = () => (
  <div className="home">
    <h1>Home</h1>

    <ul>
      <li><Link to="/dashboard">Go to Dashboard</Link></li>
    </ul>
  </div>
)

export default Home
