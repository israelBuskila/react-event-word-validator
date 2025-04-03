import '../../styles/SquareInput.css';
import { useEffect } from 'react';

interface SquareInputProps {
    letter: string;
    state: 'empty' | 'filled' | 'success' | 'error';
}

const SquareInput: React.FC<SquareInputProps> = ({ letter, state }) => {
    console.log('SquareInput received:', { letter, state });
    
    useEffect(() => {
        console.log('State changed to:', state);
    }, [state]);

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