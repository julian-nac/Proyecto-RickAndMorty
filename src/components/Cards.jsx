import React from 'react';
import Card from './Card';
import styled from 'styled-components';
import './Cards.css';

const CardContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`


const Cards = ({characters, onClose }) => {
  return (
    <CardContainer>
      {characters.map((character) => (
        <Card
          key={character.id}
          name={character.name}
          species={character.species}
          gender={character.gender}
          image={character.image}
          id={character.id}
          onClose={() => onClose(character.id)}
        />
      ))}
    </CardContainer>
  );
};

export default Cards;