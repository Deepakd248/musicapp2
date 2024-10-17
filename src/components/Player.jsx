import React, { useState, useEffect } from 'react';
import './style.css';

const Player = ({ currentTrack, onTrackChange }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(currentTrack.url));
  
  useEffect(() => {
    audio.src = currentTrack.url;
    if (isPlaying) {
      audio.play();
    }

    audio.addEventListener('ended', handleNextTrack);

    return () => {
      audio.pause();
      audio.removeEventListener('ended', handleNextTrack);
    };
  }, [currentTrack, isPlaying, audio]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNextTrack = () => {
    // Logic to get the next track
    onTrackChange(); // Pass this function as a prop to change tracks
  };

  const handlePreviousTrack = () => {
    // Logic to get the previous track
    onTrackChange(); // Pass this function as a prop to change tracks
  };

  return (
    <div className="player">
      <h2>{currentTrack.title}</h2>
      <h3>{currentTrack.artist}</h3>
      <div className="controls">
        <button onClick={handlePreviousTrack}>Previous</button>
        <button onClick={handlePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button onClick={handleNextTrack}>Next</button>
      </div>
    </div>
  );
};

export default Player;
