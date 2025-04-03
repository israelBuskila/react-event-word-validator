
interface DropDownProps {
    wordLength: number;
    handleWordLengthChange: (length: number) => void;
}

const DropDown: React.FC<DropDownProps> = ({wordLength, handleWordLengthChange}) => {
    return (
        <div className="word-length-selector">
            <label htmlFor="wordLength">Select Word Length:</label>
            <select 
              id="wordLength" 
              value={wordLength} 
              onChange={(e) => handleWordLengthChange(Number(e.target.value))}
              className="length-select"
            >
              <option value={3}>3 Letters</option>
              <option value={4}>4 Letters</option>
              <option value={5}>5 Letters</option>
              <option value={6}>6 Letters</option>
              <option value={7}>7 Letters</option>
              <option value={8}>8 Letters</option>
              <option value={9}>9 Letters</option>
              <option value={10}>10 Letters</option>
            </select>
          </div>
    )
}

export default DropDown;