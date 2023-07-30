import ArticlePage from './pages/ArticlePage'
import LandingPage from './pages/LandingPage'
import './style/App.css'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/article/:id' element={<ArticlePage />} />
      </Routes>
    </>
  )
}

export default App
