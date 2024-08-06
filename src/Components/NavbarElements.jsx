import React from 'react'

function NavbarElement({src, text}) {
  return (
    <div className='navbar-elements  nav-link'>
    <img src={src} alt='' />
      <h4>{text}</h4>
    </div>
  )
}

export default NavbarElement
