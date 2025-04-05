import { useState } from "react";
import '../styles/App.css';
import StartScreen from "./components/screens/StartScreen";
import WordValidator from "./components/screens/WordValidatorScreen";

interface ValidatorState {
  isValidatorActive: boolean;
  wordLength: number;
}

function App() {
  const [validatorState, setValidatorState] = useState<ValidatorState>({
    isValidatorActive: false,
    wordLength: 5
  });

  const handleStartValidation = () => {
    setValidatorState(prevState => ({
      ...prevState,
      isValidatorActive: true
    }));
  };

  const handleResetValidation = () => {
    setValidatorState(prevState => ({
      ...prevState,
      isValidatorActive: false
    }));
  };

  const handleWordLengthChange = (length: number) => {
    setValidatorState(prevState => ({
      ...prevState,
      wordLength: length
    }));
  };

  return (
    <div className="app-container" role="application">
      <header className="app-header">
        <h1 className="app-title">Word Validator</h1>
      </header>

      <main className="app-content">
        {!validatorState.isValidatorActive ? (
          <StartScreen 
            wordLength={validatorState.wordLength}
            handleWordLengthChange={handleWordLengthChange}
            handleStart={handleStartValidation}
          />
        ) : (
          <WordValidator 
            wordLength={validatorState.wordLength}
            handleReset={handleResetValidation}
          />
        )}
      </main>

      <footer className="app-footer">
        <p className="app-version">Event-Driven Word Validation System v1.0</p>
      </footer>
    </div>
  );
}

export default App;
