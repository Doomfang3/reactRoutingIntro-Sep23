import { Link, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import AboutPage from './pages/AboutPage'
import { useState } from 'react'
import SecretAdminPage from './pages/SecretAdminPage'
import ReactPage from './pages/ReactPage'
import BookPage from './pages/BookPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to='/' className={something => (something.isActive ? 'active' : '')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : '')}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='/admin' className={({ isActive }) => (isActive ? 'active' : '')}>
              Admin
            </NavLink>
          </li>
          <li>
            <Link to='/flatEarth'>The earth is flat</Link>
          </li>
          <li>
            <Link to='/react/old'>Old React</Link>
          </li>
          <li>
            <Link to='/react/new'>New React</Link>
          </li>
          <li>
            <a href='https://en.wikipedia.org/wiki/Pulsar' target='_blank' rel='noreferrer'>
              About a Pulsar
            </a>
          </li>
        </ul>
      </nav>
      <button type='button' onClick={() => setCount(count + 1)}>
        {count}
      </button>
      <Routes>
        <Route path='/' element={<h1>Home page</h1>} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/admin' element={<SecretAdminPage />} />
        <Route path='/react/:version' element={<ReactPage />} />
        <Route path='/books/:bookId' element={<BookPage />} />

        <Route path='*' element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
