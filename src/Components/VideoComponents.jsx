import React from 'react';

export default function VideoComponents({ src, src2, title, season, episode, duration, releaseDate }) {
  return (
    <div className='vid-section'>
      <img className='cover-photo' src={src} alt='' />
      <article className="vid-details"> 
        <img src="./Images/download.jfif" alt="" />
        <article style={styles}>
          <p id='video-title'>{title}</p>
          <p>Rick and Morty, season {season} episode {episode}</p>
          <p className='duration' style={{ marginTop: '-10px' }}>{releaseDate} <span id='duration'>{duration}</span></p>
        </article>
      </article>
    </div>
  );


}
const styles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  gap: "10px" ,
};