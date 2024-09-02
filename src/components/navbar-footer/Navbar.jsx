import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function Navbar() {
  return (
    <div>
      <header>
        Navigation
      </header>
    <body>
      <Outlet />
    </body>
    <footer>
      <Footer />
    </footer>
    </div>
  )
}

export default Navbar
