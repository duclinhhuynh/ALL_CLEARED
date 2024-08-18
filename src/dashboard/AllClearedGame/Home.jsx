import React, { useState, useEffect } from 'react'
import Header from '../component/Header'
import Body from '../component/Body'
import Footer from '../component/Footer'
const Home = () => {
  const [points, setPoints] = useState(10);
  const [time, setTime] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [lastClicked, setLastClicked] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const createElements = () => {
    const positions = [];
    for (let i = 1; i <= points; i++) {
      positions.push({
        id: i,
        number: i,
        top: `${Math.random() * 90}%`,
        left: `${Math.random() * 90}%`,
      });
    }
    return positions;
  }
  const [elements, setElements] = useState(createElements());
  // if game notwon or notover then run funciton
  useEffect(() => {
    if (!gameOver && !gameWon) {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime + 0.1);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [gameOver, gameWon]);
  const handleRestart = () => {
    setTime(0);
    setGameOver(false);
    setGameWon(false);
    setGameStarted(false); 
    setElements(createElements)
  };
  const handlePlay  = async () => {
    await setGameStarted(true);
  };
  return (
    <div style={{ margin: 'auto', position: 'relative', width: '550px', height: '630px', border: '1px solid black' }}>
      <Header
        points={points}
        setPoints={setPoints}
        handleRestart={handleRestart}
        time={time} 
        gameStarted = {gameStarted}
        handlePlay = {handlePlay}
        />
      <Body elements={elements}
        points={points} />
      {/* <Footer /> */}
    </div>
  )
}

export default Home