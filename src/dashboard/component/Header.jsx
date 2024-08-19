import React, { useState } from 'react'

const Header = ({ points, time, handleRestart, setPoints, gameStarted }) => {
    return (
        <div style={{ margin: 'auto', width: '500px' }}>
            <div>
                <h2>LET'S PLAY</h2>
                <p>Points:
                    <input type="number"
                        value={points}
                        onChange={(e) => setPoints(Number(e.target.value))} />
                </p>
                <p>Time: {time.toFixed(1)}s</p>
                <button onClick={handleRestart}>restart</button>
            </div>
        </div>
    )
}

export default Header