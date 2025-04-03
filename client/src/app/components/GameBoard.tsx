import '../../styles/GameBoard.css';
import SquareInput from "./SquareInput";

interface GameBoardProps {
    word: string[];
    wordLength: number;
    squareStates: ('empty' | 'filled' | 'success' | 'error')[];
}

const GameBoard: React.FC<GameBoardProps> = ({word, wordLength, squareStates}) => {
    return (
        <div className="game-board">
            <div className="game-board-row">
                {Array(wordLength).fill(null).map((_, index) => (
                    <SquareInput 
                        key={index}
                        letter={word[index] || ''}
                        state={squareStates[index]}
                    />
                ))}
            </div>
        </div>
    );
};

export default GameBoard;