import { useState } from "react";
import '../styles/App.css';
import StartScreen from "./components/StartScreen";
import GameScreen from "./components/GameScreen";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [wordLength, setWordLength] = useState<number>(5);



  const handleStartScreen = () => {
    setIsGameStarted(true);
  };

  const handleGameScreen = () => {
    setIsGameStarted(false);
  };

  const handleWordLengthChange = (length: number) => {
    setWordLength(length);
  };

  return (
    <div className="app-container">
      <h1 className="game-title">Word Game</h1>
      {!isGameStarted ? (
        <StartScreen wordLength={wordLength} handleWordLengthChange={handleWordLengthChange} handleStartGame={handleStartScreen}/>
      ) : (
        <GameScreen  wordLength={wordLength} handleNewGame={handleGameScreen} />
      )}
    </div>
  )
}

export default App
