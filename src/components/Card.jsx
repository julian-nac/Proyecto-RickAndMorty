import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { useState, useEffect } from 'react';
import { addFavorite, deleteFavorite} from "../redux/actions"

const CardDiseño = styled.div`
  background-color: #ffffff;
  background-image: ${props => (props.isFav ? `url("https://e1.pxfuel.com/desktop-wallpaper/347/1019/desktop-wallpaper-star-backgrounds-tumblr-posted-by-ryan-simpson-yellow-stars.jpg")` : 'none')};
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 16px;
  margin: auto;
  width: 300px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const Button = styled.button`
background-color: #f3ea00;
border: none;
color: black;
padding: 8px 16px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 18px;
font-weight: bold;
border-radius: 4px;
cursor: pointer;
margin-right: 8px;
  
  &:hover {
    background-color: #d4ca00;
  }
`;


const Boton = styled.button`
  background-color: red;
  font-size: 1.0em;
  width: 30px;
  padding: 4px;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  border: 2px solid black;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  
  &:hover {
    background-color:#650000; 
    border: 2px solid black;
  }
`;

const CardImageContainer = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  position: relative;
  overflow: hidden;
`;

const CardImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #ffffff;
  z-index: 1;
`;

const CardName = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  z-index: 2;
`;




const Card = ({ name, species, gender, image, onClose, id }) => {
  const dispatch= useDispatch()
  const myFavorites = useSelector(state => state.myFavorites)
  const [isFav, setIsFav] = useState(false)

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorite(id));
    } else {
      setIsFav(true);
      dispatch(addFavorite(name, species, gender, image, id));
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);

  return (
      <CardDiseño isFav={isFav}>
          {
            isFav ? (
                <Button onClick={handleFavorite}>★</Button>
            ) : (
                <Button onClick={handleFavorite}>✩</Button>
            )
          }
      <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
        <Boton onClick={onClose}>X</Boton>
      </div>
      <CardImageContainer image={image}>
        <CardImageOverlay>
          <Link to={`/detail/${id}`}>
          <CardName>{name}</CardName>
          </Link>
        </CardImageOverlay>
      </CardImageContainer>
      <h2 style={{ margin: '10px 0 0 0' }}>Specie: {species}</h2>
      <h2 style={{ margin: '10px 0 0 0' }}>Gender: {gender}</h2>
    </CardDiseño>
  );
};

export default Card;
