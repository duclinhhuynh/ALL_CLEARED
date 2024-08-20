import React from 'react'

const Header = ({ points, time, handleRestart, setPoints, gameWon, gameOver, gameStarted, setGameStarted }) => {
    return (
        <div style={{ margin: 'auto', width: '500px' }}>
            <div>
                {!gameOver && !gameWon && <h2>LET'S PLAY</h2>}
                {gameOver && !gameWon && <h2 style={{ color: 'red' }}>GAME OVER</h2>}
                {gameWon && <h2 style={{ color: 'green' }}>ALL CLEARED</h2>}
                <p>Points:
                    <input
                        style={{ marginLeft: "20px" }}
                        type="number"
                        value={points}
                        onChange={(e) => setPoints(Number(e.target.value))} />
                </p>
                <p>Time: <span style={{ marginLeft: "20px" }}>{time.toFixed(1)}s</span></p>
                {gameStarted ?
                    <button
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                            setGameStarted(false)
                        }}>Play</button>
                    :
                    <button
                        style={{ cursor: "pointer" }}
                        onClick={handleRestart}>restart</button>
                }
            </div>
        </div>
    )
}

export default Header