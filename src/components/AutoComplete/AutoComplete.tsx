import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/AutoComplete.scss'

interface IData {
  id: number;
  name: string;
}

const AutoComplete: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState<IData[]>([]);
  const [filteredData, setFilteredData] = useState<IData[]>([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value.toLowerCase();
    setInputValue(input);
  
    let filtered: IData[] = [];
    if (input) {
      filtered = await new Promise<IData[]>((resolve) => {
        setTimeout(() => {
          const filteredData = data.filter((item) => item.name.toLowerCase().includes(input));
          resolve(filteredData);
        }, 500); // Simulate a delay of 500 milliseconds
      });
    }
  
    setFilteredData(filtered);
  };

  const highlightMatch = (text: string) => {
    const matchStart = text.toLowerCase().indexOf(inputValue);
    const matchEnd = matchStart + inputValue.length;
    const highlightedText = (
      <>
        {text.slice(0, matchStart)}
        <strong>{text.slice(matchStart, matchEnd)}</strong>
        {text.slice(matchEnd)}
      </>
    );
    return highlightedText;
  };

  const handleItemClick = (name: string) => {
    setInputValue(name);
    setFilteredData([]);
  };

  return (
    <div className='auto-complete'>
      <input
        type="text"
        className="auto-complete__input"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type to search..."
      />
      {filteredData.length > 0 && (
        <ul className="auto-complete__list">
          {filteredData.map((item) => (
            <li key={item.id} className="auto-complete__list-item" onClick={() => handleItemClick(item.name)}>
              {highlightMatch(item.name)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;