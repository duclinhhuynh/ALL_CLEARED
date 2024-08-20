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
  const [gameStarted, setGameStarted] = useState(true);
  const createElements = () => {
    const positions = [];
    for (let i = 1; i <= points; i++) {
      positions.push({
        id: i,
        number: i,
        top: `${Math.random() * 90}%`,
        right: `${Math.random() * 90}%`,
      });
    }
    return positions;
  }
  const [elements, setElements] = useState(createElements());
  // if game notwon or notover then run funciton
  useEffect(() => {
    if (!gameOver && !gameWon && gameStarted === false) {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime + 0.1);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [gameOver, gameWon, gameStarted]);
  const handleRestart = () => {
    setTime(0);
    setGameOver(false);
    setGameWon(false);
    setGameStarted(false);
    setLastClicked(0);
    setElements(createElements)
  };
  useEffect(() => {
    // If all element are cleared and game is not over, the game is won
    if (elements.length === 0 && !gameOver && lastClicked === points) {
      setGameWon(true);
    }
  }, [elements, gameOver, lastClicked, points]);
  const handleCircleClick = (id) => {
    // Find the clicked element
    const clickedElement = elements.find((el) => el.id === id);
    if (!clickedElement || clickedElement.clicked || gameOver || gameWon) return;

    // gameOver if element first # elment last
    // lastclicked = 0,1,2,3,4
    if (clickedElement.number !== lastClicked + 1) {
      setGameOver(true);
      return;
    }
    // Update the last clicked number
    setLastClicked(clickedElement.number);
    // Mark el as clicked and turn it red
    setElements((clickedEl) =>
      clickedEl.map((el) => {
        if (el.id === id) {
          return { ...el, clicked: true };
        } else {
          return el;
        }
      })
    );
    // Delay and removal of the el clicked 
    setTimeout(() => {
      setElements((prevEl) =>
        prevEl.filter((point) => point.id !== id)
      );
    }, 1000);
  };
  return (
    <div style={{ margin: 'auto', position: 'relative', width: '550px', height: '630px', border: '1px solid black' }}>
      <Header
        points={points}
        setPoints={setPoints}
        handleRestart={handleRestart}
        time={time}
        gameOver={gameOver}
        gameWon={gameWon}
        setGameStarted={setGameStarted}
        gameStarted={gameStarted}
      />
      <Body elements={elements}
        points={points}
        handleCircleClick={handleCircleClick}
        gameStarted={gameStarted}
      />
      {/* <Footer /> */}
    </div>
  )
}

export default Home