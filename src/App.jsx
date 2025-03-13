import { Route, Routes } from 'react-router'
import './App.css'
import Dashboard from './containers/Dashboard'
import { PostProvider } from './context/PostContext'
import Posts from './components/Posts'
import PostDetail from './components/PostDetail'
import AddPostForm from './components/AddPostForm'

function App() {

  return (
    <PostProvider>
      <Routes>
        <Route path='/' element={<Dashboard />}>
          <Route path='/posts' element={<Posts />}></Route>
          <Route path='/posts/:id' element={<PostDetail />}></Route>
          <Route path='/posts/add' element={<AddPostForm />}></Route>
        </Route>
      </Routes>
    </PostProvider>
  )
}

export default App
