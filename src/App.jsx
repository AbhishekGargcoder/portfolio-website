import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {
  return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
  )
}

function MyApp() {
  return (
    <div className="App">
      <h1>Hello Vite!</h1>
      <p>
        Check out the <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Docs</a> to learn
        more about using Vite in your project.
      </p>
      <p>
        <a href="https://vitejs.dev/guide/features.html" target="_blank">
          Vite Docs
        </a>
      </p>
    </div>
  )
}

export default App
