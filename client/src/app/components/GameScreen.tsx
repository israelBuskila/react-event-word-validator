import { useState, useEffect, useCallback } from "react";
import GameBoard from "./GameBoard";
import Keyboard from "./Keyboard";
import { WordApi } from "../api/word.api";
import { SquareState } from "../../types";
import { useActionListener } from "../hooks/useActionListener";
import '../../styles/GameScreen.css';

interface GameScreenProps {
    wordLength: number;
    handleNewGame: () => void;
}

const GameScreen: React.FC<GameScreenProps> = ({wordLength, handleNewGame}) => {
    const [word, setWord] = useState<string[]>([]);
    const [squareStates, setSquareStates] = useState<SquareState[]>(
        Array(wordLength).fill('empty')
    );
    const [showInstructions, setShowInstructions] = useState(false);
    
    const { registerListener, removeListener, emit, GAME_ACTIONS } = useActionListener(true);

    const handleKeyboardAction = useCallback(async (key: string) => {
        if (key === 'ENTER') {
            if (word.length === wordLength) {
                try {
                    const res = await WordApi.fetchWord(word.join(""));
                    setSquareStates(Array(wordLength).fill(res?.ok ? 'success' : 'error'));
                } catch {
                    setSquareStates(Array(wordLength).fill('error'));
                }
            }
            return;
        }

        if (key === '⌫') {
            if (word.length > 0) {
                setWord(prev => prev.slice(0, -1));
                setSquareStates(prev => {
                    const newStates = [...prev];
                    newStates[word.length - 1] = 'empty';
                    return newStates;
                });
            }
            return;
        }

        if (word.length < wordLength) {
            setWord(prev => [...prev, key]);
            setSquareStates(prev => {
                const newStates = [...prev];
                newStates[word.length] = 'filled';
                return newStates;
            });
        }
    }, [word, wordLength]);

    useEffect(() => {
        registerListener(GAME_ACTIONS.KEY_PRESS, handleKeyboardAction);
        
        return () => {
            removeListener(GAME_ACTIONS.KEY_PRESS);
        };
    }, [handleKeyboardAction]);

    const handleKeyClick = (key: string) => {
        emit(GAME_ACTIONS.KEY_PRESS, key);
    };

    return (
        <div className="game-screen">
            {/* Help button */}
            <button 
                className="help-button" 
                onClick={() => setShowInstructions(true)}
                aria-label="Show instructions"
            >
                ?
            </button>

            {/* Instructions Modal */}
            {showInstructions && (
                <div className="modal-overlay" onClick={() => setShowInstructions(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button 
                            className="modal-close" 
                            onClick={() => setShowInstructions(false)}
                        >
                            ×
                        </button>
                        <div className="game-instructions">
                            <h2>How to Play</h2>
                            <ul>
                                <li>Type letters to fill the squares from left to right</li>
                                <li>Press <span className="key-highlight">ENTER</span> when you complete the word</li>
                                <li>Squares turn <span className="success-text">green</span> if the word exists</li>
                                <li>Squares turn <span className="error-text">red</span> if the word doesn't exist</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            <button className="new-game-button" onClick={handleNewGame}>
                New Game
            </button>
            <GameBoard 
                word={word} 
                wordLength={wordLength} 
                squareStates={squareStates}
            />
            <Keyboard onKeyClick={handleKeyClick}/>
        </div>      
    );
};

export default GameScreen;