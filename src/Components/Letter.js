import React, {useContext} from 'react'
import { AppContext} from '../App';

function Letter({letterIndex, attemptVal}) {
    const {board} =useContext(AppContext);
    const letter= board[attemptVal][letterIndex];
  return (
    <div className='letter'>{letter}</div>
  )
}

export default Letter