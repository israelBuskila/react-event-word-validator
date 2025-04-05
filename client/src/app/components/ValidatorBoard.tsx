import '../../styles/ValidatorBoard.css';
import SquareInput from "./SquareInput";

interface ValidatorBoardProps {
    word: string[];
    wordLength: number;
    squareStates: ('empty' | 'filled' | 'success' | 'error')[];
}

const ValidatorBoard: React.FC<ValidatorBoardProps> = ({word, wordLength, squareStates}) => {
    return (
        <div className="validator-board">
            <div className="validator-row">
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

export default ValidatorBoard;