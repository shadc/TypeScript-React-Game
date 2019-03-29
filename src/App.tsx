import React, { useState } from 'react';
import './App.css';

import Game from "./Components/Game";
import Header from "./Components/Header"

const StarMatch = () => {
  const [gameId, setGameId] = useState(1)
  // startNewGame below, unmounts the Game and remounts a new one... because we've changed the gameId property.
  return ( 
    <>
      <Header name={'Shad'} msg={'Lets Get Started!'}/> 
      <Game key={gameId} startNewGame={() => setGameId(gameId + 1)}/> 
    </>

  );
}

export default StarMatch;
