import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 0.5rem 1rem;
  input {
    border: none;
    flex: 1;
    margin-right: 0.5rem;
    font-size: 1rem;
    outline: none;
  }
  button {
    background-color: #1bae00;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.2s ease-in-out;
    &:hover {
      background-color: #2b6500;
    }
  }
`;

function SearchBar ({ onSearch }) {
  const [character, setCharacters] = useState('');

  const handleInputChange = (event) => {
    setCharacters(event.target.value)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSearch(character);
      setCharacters('');
    }
  }

  const handleClick = () => {
    onSearch(character);
    setCharacters('');
  }

  return (
    <SearchContainer>
      <SearchBarContainer>
        <input
          type="search"
          placeholder="Buscar personajes..."
          value={character}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleClick}>Agregar</button>
      </SearchBarContainer>
    </SearchContainer>
  );
};

export default SearchBar;
