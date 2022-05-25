import React, {useContext} from 'react'
import { AppContext} from '../App';

function Letter({letterIndex, attemptVal}) {
    const {board, correctWord, currentAttempt} =useContext(AppContext);
    const letter= board[attemptVal][letterIndex];

    const correct = correctWord[letterIndex] === letter
    const almost= !correct && letter !== "" && correctWord.includes(letter)

    const letterState= currentAttempt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");
  return (
    <div className='letter' id={letterState}>{letter}</div>
  )
}

export default Letter