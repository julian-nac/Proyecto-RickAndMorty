import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { removeFav, orderCards, filterCards } from "../redux/actions";

const FavoritesContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;

`;

const CardDiseño = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 16px;
  margin: auto;
  width: 300px;
  margin-bottom: 20px;
  margin-top: 20px;
  position: relative;
  background-image: url("https://e1.pxfuel.com/desktop-wallpaper/347/1019/desktop-wallpaper-star-backgrounds-tumblr-posted-by-ryan-simpson-yellow-stars.jpg")
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

const RemoveButton = styled.button`
  background-color: red;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
`;
const SelectContainer = styled.div`

align-items: center;
margin-bottom: 10px;

select {
  padding: 6px 10px;
  border-radius: 4px;
  border: none;
  background-color: #f2f2f2;
  color: #333333;
  font-size: 14px;
}
`;

const Favorites = () => {
  const { myFavorites } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleRemoveFavorite = characterId => {
    dispatch(removeFav(characterId));
  };

  const handleOrderChange = event => {
    const selectedOption = event.target.value;
    dispatch(orderCards(selectedOption));
  };

  const handleGenderFilterChange = event => {
    const selectedOption = event.target.value;
    dispatch(filterCards(selectedOption));
  };

  return (
    <FavoritesContainer>
      <SelectContainer>
        <select onChange={handleOrderChange}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
      </SelectContainer>
      <SelectContainer>
        <select onChange={handleGenderFilterChange}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </SelectContainer>
      {myFavorites.map((character, index) => (
        <CardDiseño key={index}>
          <CardImageContainer image={character.image}>
            <CardImageOverlay>
              <Link to={`/detail/${character.id}`}>
                <CardName>{character.name}</CardName>
              </Link>
            </CardImageOverlay>
          </CardImageContainer>
          <h2 style={{ margin: "10px 0 0 0" }}>Specie: {character.species}</h2>
          <h2 style={{ margin: "10px 0 0 0" }}>Gender: {character.gender}</h2>
          <RemoveButton onClick={() => handleRemoveFavorite(character.id)}>
            Remove
          </RemoveButton>
        </CardDiseño>
      ))}
    </FavoritesContainer>
  );
};

export default Favorites;