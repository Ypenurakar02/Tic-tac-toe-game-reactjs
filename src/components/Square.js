import React from 'react';
import classes from './Square.css';
const square = (props) => {
    const value = props.value;
    let playerClass = value === null ? classes.square : (value === 'X' ? [classes.square,classes.playerX].join(' ') : [classes.square,classes.playerO].join(' ') );
    
    return (
        <button
            onClick={props.clicked}
            className={playerClass}
        > {value} </button>
    );
};

export default square;