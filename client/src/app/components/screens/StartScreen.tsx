import DropDown from "../DropDown";
import '../../../styles/StartScreen.css';

interface StartScreenProps {
    wordLength: number;
    handleWordLengthChange: (length: number) => void;
    handleStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({wordLength, handleWordLengthChange, handleStart}) => {
    return (
        <div className="start-screen">
          <DropDown wordLength={wordLength} handleWordLengthChange={handleWordLengthChange}/>
          <button className="start-button" onClick={handleStart}>
            Start
          </button>
        </div>
    )
}   

export default StartScreen; 