import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER} from "./action-types"

export const addFavorite = (name, species, gender, image, id) => {
  return {
    type: ADD_FAVORITE,
    payload: {
      name,
      species,
      gender,
      image,
      id
    }
  };
};

export const deleteFavorite = (id) => {
  return {
    type: DELETE_FAVORITE,
    payload: id
  };
};

export const filterCards = (status) => {
  return {
    type: FILTER,
    payload: status
  }
}

export const orderCards = (id) => {
  return {
    type: ORDER,
    payload: id
  }
}
  