import React from 'react'
import NavbarElement from './NavbarElements'
import tabs from './tabs'

function Navbar({mode, closeBar}) {
 
  return (
    <nav id="navbar" className="sidenav">
      <img src="./Images/icon-close.svg" id='close-icon' alt="" onClick={closeBar} />
      {tabs.map((tab => (
        <NavbarElement key={tab.id} text={tab.name} src={mode ? `./Images/${tab.image1}` : `./Images/${tab.image2}`} />
      )))}
    </nav>
  )
}

export default Navbar
