import "./App.css";
import Keyboard from "./Components/Keyboard";
import { boardDefault } from "./Components/Words";
import GameBoard from "./Components/GameBoard";
import {createContext, useState} from "react";

export const AppContext= createContext();

function App() {
  const[board, setBoard] =useState (boardDefault); 
  const [currentAttempt, setCurrentAttempt] = useState({attempt: 0, letterIndex: 0})
  const correctWord= "REACT";

  const onSelectLetter =(keyVal) => {
    if (currentAttempt.letterIndex > 4) return;
    const currentBoard = [...board];
    currentBoard[currentAttempt.attempt][currentAttempt.letterIndex] = keyVal;
    setBoard(currentBoard);
    setCurrentAttempt({...currentAttempt, letterIndex: currentAttempt.letterIndex +1});
  }
  const onDelete =() =>{
    if(currentAttempt.letterIndex=== 0) return;
    const currentBoard = [...board];
    currentBoard[currentAttempt.attempt][currentAttempt.letterIndex -1] = "";
    setBoard(currentBoard)
    setCurrentAttempt({...currentAttempt, letterIndex: currentAttempt.letterIndex -1})
  }
  const onEnter =() =>{
    if(currentAttempt.letterIndex !==5) return;
    setCurrentAttempt({attempt: currentAttempt.attempt +1, letterIndex: 0})
  }
  return (
    <div className="App">
      <nav>
      <h1>Wordle</h1>
      </nav>
      <AppContext.Provider value={{board, setBoard, currentAttempt, setCurrentAttempt, onDelete, onEnter, onSelectLetter, correctWord}}>
        <div className="game">
<GameBoard />
<Keyboard />
</div>
</AppContext.Provider>
    </div>
  );
}

export default App;
