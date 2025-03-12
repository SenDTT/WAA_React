import './App.css'
import Dashboard from './containers/Dashboard'
import { PostProvider } from './context/PostContext'

function App() {

  return (
    <PostProvider>
      <Dashboard />
    </PostProvider>
  )
}

export default App
