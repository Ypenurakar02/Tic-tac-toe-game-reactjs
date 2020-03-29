import React from 'react';
import Square from './Square';
import classes from './Board.css';

const Board = (props) => {
    const createBoard = (row, col) => {
        const board = [];
        let cellNo = 0
        for (let i = 0; i < row; i++) {
            const rows = [];
            for (let j = 0; j < col; j++) {
                rows.push(createRow(cellNo++));
            }
            board.push(<div key={i} className={classes.boardRow}>{rows}</div>)
        }

        return board;
    };

    const createRow = (i) => {
        return (
            <Square
                key={i}
                value={(props.squares || [])[i]}
                clicked={() => props.clicked(i)}
            />);
    };

    const ret = createBoard(3, 3);
    
    return ret;
};

export default Board;

