import '../../styles/SquareInput.css';

interface SquareInputProps {
    letter: string;
    state: 'empty' | 'filled' | 'success' | 'error';
}

const SquareInput: React.FC<SquareInputProps> = ({ letter, state }) => {

    return (
        <div 
            className={`square ${state}`}
            data-testid="square-input"
            data-state={state}
        >
            {letter}
        </div>
    );
};

export default SquareInput;