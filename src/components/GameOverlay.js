import React from 'react'
import TryAgainLogo from '../assets/img/try-again.gif';

const GameOverlay = ({onReseart, board}) => {

  if (board.hasWon()){
    return <div className='tile2048'></div>;
  } else if (board.hasLost()){
    return (
        <div className='gameOver' onClick={onReseart}>
            <img src={TryAgainLogo} alt="Try Again" style={{
                width: '100%',
                height: '100%',
                cursor: 'pointer',
            }} />
        </div>
    )
  }

  return (
    null
  )
};

export default GameOverlay;