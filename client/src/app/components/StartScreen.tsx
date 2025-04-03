import DropDown from "./DropDown";

interface StartScreenProps {
    wordLength: number;
    handleWordLengthChange: (length: number) => void;
    handleStartGame: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({wordLength, handleWordLengthChange, handleStartGame}) => {
    return (
        <div className="start-screen">
          <DropDown wordLength={wordLength} handleWordLengthChange={handleWordLengthChange}/>
          <button className="start-button" onClick={handleStartGame}>
            Start Game
          </button>
        </div>
    )
}   

export default StartScreen; 