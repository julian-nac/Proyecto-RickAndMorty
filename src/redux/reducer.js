import { ADD_FAVORITE, FILTER, ORDER } from "./action-types";
import { DELETE_FAVORITE } from "./action-types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        allCharacters: [...state.allCharacters, action.payload],
      };
    case DELETE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(item => item.id !== action.payload),
      };
    case FILTER:
      const { allCharacters } = state;
      const filterCharacters = allCharacters.filter(character => character.gender === action.payload);
      return {
        ...state,
        myFavorites: filterCharacters,
      };
    case ORDER:
      const orderCharacters = [...state.allCharacters]; 

      if (action.payload === "Ascendente") {
        orderCharacters.sort((a, b) => a.id - b.id);
      } else if (action.payload === "Descendente") {
        orderCharacters.sort((a, b) => b.id - a.id);
      }

      return {
        ...state,
        myFavorites: orderCharacters,
      };
    default:
      return state;
  }
};

export default reducer;
