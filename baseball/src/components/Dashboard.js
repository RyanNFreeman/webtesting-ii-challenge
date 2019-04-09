import React from 'react'

import Display from './Display'


class Dashboard extends React.Component {
    state = {
        strike: 0,
        ball: 0,
        foul: 0,
        hit: 0
    }

    render(){
    return (
        <>
            <Display score={this.state} />

            <h1>Dashboard</h1>
            <button onClick={this.clickHandler}>Strike</button>
            <button>Ball</button>
            <button>Foul</button>
            <button>Hit</button>
            
        </>
    )}
    clickHandler = e => {
        this.setState={
            strike: 'hello'
        }
    }
}

export default Dashboard