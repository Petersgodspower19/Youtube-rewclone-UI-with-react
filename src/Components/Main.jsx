import React, { useState } from 'react'
import Header from './Header';
import MainNavigations from './MainNavigations'
import rickAndMortyEpisodes from '../episodes'
import VideoComponents from './VideoComponents'

function Main({ showBar, toggleMode, mode }) {
  const [filteredList, setFilteredList] = useState('');

  const searchText = (text) => {
    setFilteredList(text.toLowerCase());
  }

  const navTitles = ["Rick and Morty", "Demon Slayer","Bleach","Regular Show","Regular Show","Regular Show",
    "Regular Show","Regular Show","Regular Show","Demon Slayer","Demon Slayer","PH",];
    const videos = rickAndMortyEpisodes;
  return (
    <div className="main" id="main-doc">
      <Header showBar={showBar} search={searchText} toggleMode={toggleMode} src={mode ? './Images/bell.png' : './Images/bell2.png'} />
      <section className='main-navigations'>
        {navTitles.map((title, idx) => (
          <MainNavigations key={idx} text={title} />
        ))}
      </section>
      <div className='video-section'>
        {!filteredList ? (
          videos.map((video) => (
             <VideoComponents key={video.id} src={video.coverPhoto}
          season={video.season} episode={video.episode} duration={video.duration} releaseDate={video.releaseDate}
          title={video.title} />
          ))
         
        ): (
          videos.filter((video) =>( video.title.toLowerCase().includes(filteredList) || video.episode == filteredList)).map((video) => (
            <VideoComponents key={video.id} src={video.coverPhoto}
         season={video.season} episode={video.episode} duration={video.duration} releaseDate={video.releaseDate}
         title={video.title} />
         ))
        )}
      </div>
    </div>
  )
}

export default Main
