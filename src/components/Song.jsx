// Song.jsx
import React, { useState } from 'react';
import './Song.css'; // Make sure to style your component

const Song = ({ title, artist, albumArt, duration }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to handle play/pause
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="song">
      <div className="song-info">
        <img src={albumArt} alt={`${title} album art`} className="album-art" />
        <div className="details">
          <h3>{title}</h3>
          <p>{artist}</p>
        </div>
      </div>

      <div className="controls">
        <button onClick={togglePlay}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <p className="duration">{duration}</p>
      </div>
    </div>
  );
};

export default Song;
