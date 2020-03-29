import React from 'react';
import classes from './App.css';
import Game from './containers/Game';
function App() {
  return (
    
    <div className={classes.App}>
      <div className={classes.header}>
          <h1 className={classes.fontPrimary}>Tic Tac Toe</h1>
        </div>
      <Game/>
    </div>

  );
}

export default App;
