import { useState, useEffect, useCallback } from "react";
import ValidatorBoard from "../ValidatorBoard";
import { WordApi } from "../../api/word.api";
import { SquareState } from "../../../types";
import { UseValidatorEvents } from "../../hooks/UseValidatorEvents";
import '../../../styles/WordValidatorScreen.css';
import Keyboard from "../Keyboard";

interface WordValidatorProps {
    wordLength: number;
    handleReset: () => void;
}

const WordValidatorScreen: React.FC<WordValidatorProps> = ({wordLength, handleReset}) => {
    const [word, setWord] = useState<string[]>([]);
    const [squareStates, setSquareStates] = useState<SquareState[]>(
        Array(wordLength).fill('empty')
    );
    const [showInstructions, setShowInstructions] = useState(false);
    
    const { registerValidatorEvent, removeValidatorEvent, emitValidatorEvent, VALIDATOR_EVENTS } = UseValidatorEvents(false);

    const handleInputAction = useCallback(async (key: string) => {
        if (key === 'ENTER') {
            if (word.length === wordLength) {
                try {
                    const res = await WordApi.validateWord(word.join(""));
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
        registerValidatorEvent(VALIDATOR_EVENTS.INPUT_CHAR, handleInputAction);
        return () => {
            removeValidatorEvent(VALIDATOR_EVENTS.INPUT_CHAR);
        };
    }, [handleInputAction]);

    const handleKeyInput = (key: string) => {
        emitValidatorEvent(VALIDATOR_EVENTS.INPUT_CHAR, key);
    };

    return (
        <div className="validator-screen">
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
                        <div className="validator-instructions">
                            <h2>Validation Instructions</h2>
                            <ul>
                                <li>Enter characters to form a word</li>
                                <li>Press <span className="key-highlight">ENTER</span> to validate</li>
                                <li>Indicators turn <span className="success-text">green</span> for valid words</li>
                                <li>Indicators turn <span className="error-text">red</span> for invalid words</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            <button className="reset-button" onClick={handleReset}>
                Reset
            </button>
            <ValidatorBoard 
                word={word} 
                wordLength={wordLength} 
                squareStates={squareStates}
            />
            <Keyboard onKeyClick={handleKeyInput}/>
        </div>      
    );
};

export default WordValidatorScreen;