import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="header">
          <h1 className="header-title">Math Magician</h1> 
          <div className="links-div">
          <Link to="/">Home</Link>
          <Link to="/calculator">Calculator</Link>
          <Link to="/quote">Quote</Link>
          </div>
        </header>
    )
}

export default Header
