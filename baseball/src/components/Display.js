import React from 'react'

const Display = (props) => {
    return (
        <>
        <h1>Display</h1>
        <h2>Strikes: {parseInt(props.score.strike)}</h2>
        <h2>Balls: {parseInt(props.score.ball)}</h2>
        </>
    )
}

export default Display