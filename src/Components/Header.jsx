import React, { useState } from 'react'

export default function Header({showBar, toggleMode, src, search}) {

  const [value, setValue] = useState('');



  const assignValue = (e) => {
    setValue(e.target.value);
  }
    const makeSearch = (e) => {
   e.preventDefault();
    search(value);
  }
  return (
    <header>
      <img src="./Images/icon-menu.svg" id='menu-btn' alt=""  onClick={showBar}/>
        <article className='logo'>
            <img src='./Images/youtube.png' alt='youtube-logo' />
        <h6>Youtube</h6>
        </article>

        <form className="input" onSubmit={makeSearch}>
            <article>
            <input type="text" name="" value={value} id="" onChange={assignValue} />
            <button type='submit'>Search</button>
            </article>
            <div>
            <img src='./Images/recorder-microphone.png' alt='mic' />
            </div>
        </form>
        
        <div className="account">
        <input className='checker' type="checkbox" id="modeToggle" onClick={toggleMode} />
        <label className="slider" htmlFor="modeToggle"></label>
            <img src={src} alt='bel' />
            <p>P</p>
        </div>
    </header>
  )
}
