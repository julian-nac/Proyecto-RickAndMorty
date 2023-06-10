const initialState = {
  myFavorites: [],
  allCharacters: [],
  filteredCharacters: [],
  unsortedCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FAV':
      return {
        ...state,
        myFavorites: action.payload,
        unsortedCharacters: action.payload,
      };
    case 'REMOVE_FAV':
      return {
        ...state,
        myFavorites: action.payload,
        unsortedCharacters: action.payload,
      };
    case 'FILTER':
      const { unsortedCharacters } = state;
      const filteredCharacters = unsortedCharacters.filter(
        character => character.gender === action.payload
      );
      return {
        ...state,
        filteredCharacters,
        myFavorites: filteredCharacters,
      };
    case 'ORDER':
      const { myFavorites } = state;
      const orderCharacters = [...myFavorites];

      if (action.payload === 'Ascendente') {
        orderCharacters.sort((a, b) => a.id - b.id);
      } else if (action.payload === 'Descendente') {
        orderCharacters.sort((a, b) => b.id - a.id);
      }

      return {
        ...state,
        myFavorites: orderCharacters,
        unsortedCharacters: orderCharacters,
      };
    default:
      return state;
  }
};

export default reducer;
