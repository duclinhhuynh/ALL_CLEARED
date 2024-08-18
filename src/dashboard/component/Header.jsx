import React, { useState } from 'react'

const Header = ({ points, time, handleRestart, setPoints }) => {
    return (
        <div style={{ margin: 'auto', width: '500px' }}>
            <div>
                <h1>LET'S PLAY</h1>
                <p>Points:
                    <input type="number"
                        value={points}
                        onChange={(e) => setPoints(Number(e.target.value))} />
                </p>
                <p>Time: {time.toFixed(1)}s</p>
                <button onClick={handleRestart}>Restart</button>
            </div>
        </div>
    )
}

export default Header