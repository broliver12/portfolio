import React, {useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import './App.css'
import HomePage from './components/homepage/HomePage'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import Socials from './components/Socials'
import IconLoading from './icon/IconLoading'
import reveal from './animations/ScrollListener'

/**
 * Main App widget
 *
 * @return {App}
 */
function App() {
  const [loading, setLoading] = useState(true)

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

  useEffect(() => {
    /**
     * Show loading view
     */
    async function loadContent() {
      await sleep(2500)
      setLoading(false)
    }
    window.addEventListener('scroll', reveal)
    loadContent()
  }, [])

  return loading === true ? (
    <div className="loadingContainer">
      <span className="loadingIcon">
        <IconLoading />
      </span>
    </div>
  ) : (
    <Router>
      <Navbar />
      <Socials />
      <Routes>
        <Route path="/" exact element={
          <HomePage />
        } />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App
