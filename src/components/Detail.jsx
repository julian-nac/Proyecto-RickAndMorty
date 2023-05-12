import styled, { keyframes } from 'styled-components';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const DetailContainer = styled.div`
  background-color: #F5F5F5;
  background-size: cover;
  background-position: center;
  border: 3px solid black;
  padding: 20px;
  border-radius: 20px;
  width: 400px;
  margin: 50px auto;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Name = styled.h1`
  -webkit-text-stroke: 2px black;
  font-size: 40px;
  color: black;

`;

const Text = styled.h2`
  -webkit-text-stroke: 1px black;
  font-size: 25px;
  color: black;
  transition: color 0.5s ease-in-out;
`;

const Detail = () => {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
  }, [detailId]);

  return (
    <DetailContainer>
      <Name>{character.name}</Name>
      <img src={character.image} alt={character.name} style={{ border: '3px solid black', borderRadius: '15px' }}/>
      <Text>Status: {character.status}</Text>
      <Text>Specie: {character.species}</Text>
      <Text>Gender: {character.gender}</Text>
      <Text>Origin: {character.origin?.name}</Text>
    </DetailContainer>
  );
};

export default Detail;
