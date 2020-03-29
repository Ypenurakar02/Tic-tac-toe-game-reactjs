import React, { Component } from 'react';
import Modal from '../UI/Modal/Modal';
import Aux from '../hoc/Auxilary';
import GameOver from '../components/GameOver';
import Board from '../components/Board';
import classes from './Game.css';

const initialState = {
  history: [
    { squares: Array(9).fill(null) }
  ],
  xIsNext: true,
  totalSteps: 0,
  gameOver: false,
};

class Game extends Component {
  state = initialState;

  calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  clickHandler = (squareIndex) => {
    const updatedSquares = [...(this.state.history || [])[0].squares];
    updatedSquares[squareIndex] = this.state.xIsNext ? 'X' : 'O';
    const updatedTotalSteps = this.state.totalSteps + 1;
    const won = this.calculateWinner(updatedSquares);
    const status = this.getStatus(won, updatedTotalSteps);

    if ((this.state.history || [])[0].squares[squareIndex]) {

      return;
    }

    this.setState({
      history: [
        { squares: updatedSquares }
      ],
      xIsNext: !this.state.xIsNext,
      totalSteps: updatedTotalSteps,
      gameOver: status,
    });
  };

  getStatus = (winner, totalSteps) => {
    let status = false;
    if (winner) {
      status = `Winner is ${winner}!`;
    } else if (totalSteps === 9) {
      status = "It's a tie!";
    }

    return status;
  };

  whosNext = () => {
    return ("It's your turn " + (this.state.xIsNext ? 'X' : 'O'));
  }

  resetGame = () => {
    this.setState(initialState);
  };

  render() {
    let playerStatusCss = this.state.xIsNext ? classes.playerStatusX : classes.playerStatusO;
    playerStatusCss = [classes.playerStatus, playerStatusCss].join(' ');

    return (
      <Aux>
        <Modal show={this.state.gameOver} modalClose={this.resetGame}>
          <GameOver message={this.state.gameOver} />
        </Modal>
        <div className={classes.game}>
          <div className={playerStatusCss}>{this.whosNext()}</div>
          <div className={classes.gameBoard}>
            <Board
              squares={(this.state.history || [])[0].squares}
              clicked={this.clickHandler}
            />
          </div>
          <button className={classes.resetButton} onClick={this.resetGame}>Restart</button>
        </div>
      </Aux>
    );
  }
};

export default Game;