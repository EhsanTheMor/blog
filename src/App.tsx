import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import NavbarMenu from './components/NavbarMenu'
import ArticlePage from './pages/ArticlePage'
import LandingPage from './pages/LandingPage'
import './style/App.css'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <HeroSection />
      <NavbarMenu />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/article/:id' element={<ArticlePage />} />
      </Routes>
      <div className='full_divider'></div>
      <Footer />
    </>
  )
}

export default App
