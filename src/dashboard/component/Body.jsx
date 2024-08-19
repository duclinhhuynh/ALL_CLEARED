import React from 'react'

const Body = ({ elements, points,handleCircleClick }) => {
    return (
        <div style={{ margin: 'auto', top: '10px', position: 'relative', width: '500px', height: '450px', border: '1px solid black' }}>
            {elements.map((el) => (
                <div
                    onClick={() => handleCircleClick(el.id)}
                    key={el.id}
                    style={{
                        position: 'absolute',
                        top: el.top,
                        right: el.right,
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        border: '2px solid black',
                        backgroundColor: el.clicked ? 'red' : 'white',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease',
                        boxSizing: 'border-box'
                    }}>
                    {el.number}
                </div>
            ))}
        </div>
    )
}

export default Body