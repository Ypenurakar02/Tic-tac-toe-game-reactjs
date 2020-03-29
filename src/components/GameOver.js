import React from 'react';
import Aux from '../hoc/Auxilary';

const gameOver = (props) => {
    return (
        <Aux>
            <h3>Game Over</h3>
            <p>{props.message}</p>
        </Aux>
    );
}

export default gameOver;