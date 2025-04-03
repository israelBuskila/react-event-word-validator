import { useState } from "react";
import GameBoard from "./GameBoard";
import Keyboard from "./Keyboard";
import { WordApi } from "../api/word.api";
import { SquareState } from "../../types";
import '../../styles/GameScreen.css';

interface GameScreenProps {
    wordLength: number;
    handleNewGame: () => void;
}

const GameScreen: React.FC<GameScreenProps> = ({wordLength, handleNewGame}) => {
    const [word, setWord] = useState<string[]>([]);
    const [squareStates, setSquareStates] = useState<Array<SquareState>>(
        Array(wordLength).fill('empty')
      );
    
    const handleKeyClick = async (key: string) => {
        if (key === 'ENTER') {
          if (word.length !== wordLength) return;
            const res = await WordApi.fetchWord(word.join(""));
            if (res?.ok) {
              setSquareStates(Array(wordLength).fill('success'));
            } else {
              setSquareStates(Array(wordLength).fill('error'));
            }
        } 
        else if (key === '⌫') {
          if(word.length === 0) return;
          setWord(word.slice(0, -1));
          setSquareStates(Array(wordLength).fill('empty'));
        }
        else if (word.length < wordLength) {
          setWord([...word, key]);
          setSquareStates(Array(wordLength).fill('filled'));
        }
      }
    return (
        <div className="game-screen">
          <button className="new-game-button" onClick={handleNewGame}>
            New Game
          </button>
          <GameBoard word={word} wordLength={wordLength} squareStates={squareStates}/>
          <Keyboard onKeyClick={handleKeyClick}/>
        </div>      
    )
}           

export default GameScreen;