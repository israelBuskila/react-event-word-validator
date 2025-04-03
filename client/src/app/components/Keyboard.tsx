import '../../styles/Keyboard.css';
interface KeyboardProps {
    onKeyClick: (key: string) => void;
}

const Keyboard: React.FC<KeyboardProps> = ({onKeyClick}) => { 
    const keyboardRows = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫']
    ];


    return (
        <div className="keyboard">
            {keyboardRows.map((row, rowIndex) => (
                <div key={rowIndex} className="keyboard-row">
                    {row.map((key) => (
                        <button
                            key={key}
                            className={`keyboard-key ${key === 'ENTER' || key === '⌫' ? 'keyboard-key-wide' : ''}`}
                            onClick={() => onKeyClick(key)}
                        >
                            {key}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Keyboard;    