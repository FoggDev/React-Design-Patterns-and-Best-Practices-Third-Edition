// Components
import DashboardLayout from '../components/dashboard/DashboardLayout'

// Contexts
import UserProvider from '../contexts/user'

const Dashboard = () => (
  <UserProvider>
    <DashboardLayout />
  </UserProvider>
)

export default Dashboard
