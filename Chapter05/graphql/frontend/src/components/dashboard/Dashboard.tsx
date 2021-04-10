import { Link } from 'react-router-dom'

interface IProps {
  connectedUser: any
}

const Dashboard = ({ connectedUser }) => (
  <div className="home">
    <h1>Welcome, {connectedUser.username}!</h1>

    <ul>
      <li><a href="/logout">Logout</a></li>
    </ul>
  </div>
)

export default Dashboard
