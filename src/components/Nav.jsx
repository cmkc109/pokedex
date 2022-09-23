import React, {useState} from 'react'
import '../styles/Nav.css'
import {Link} from 'react-router-dom'

const Nav = () => {
  const headerStyle = {
    height: "15vh",
    background: "black",
    color: "white",
    textAlign: "center",
    padding: "1rem",
    textDecoration: "none",
    fontSize: "3rem"
  }

  let listStyle = {
    color: "white",
    textDecoration: "none",
    border: "1px solid white",
    padding: "0.2rem 1rem",
    marginRight: "2rem",
  }
  
  const [hover, setHover] = useState(false)

  const toggleHover = () => {
    setHover(!hover);
    if (hover) {
      listStyle = {...listStyle, backgroundColor: "grey"}
    }
  }
  return (
    <header className="header">
      <Link to="/" style={headerStyle}>POKEDEX</Link>
        <nav>
           <ul>
              <Link to="/search" style={listStyle} onMouseOver={toggleHover} onMouseLeave={toggleHover}>Search By Name</Link>
              <Link to="/" style={listStyle}>Browse Pokedex</Link>
           </ul>
        </nav>
    </header>
  )
}

export default Nav