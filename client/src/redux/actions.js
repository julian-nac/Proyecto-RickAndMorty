import axios from "axios";


export const addFav = (character) => {
   return async (dispatch) => {
     try {
       const response = await axios.post('http://localhost:3001/rickandmorty/favorites', character);
       const data = response.data;
       dispatch({
         type: 'ADD_FAV',
         payload: data,
       });
     } catch (error) {
       console.error('Error adding favorite:', error);
     }
   };
 };
 
 export const removeFav = (id) => {
   return async (dispatch) => {
     try {
       const response = await axios.delete(`http://localhost:3001/rickandmorty/favorites/${id}`);
       const data = response.data;
       dispatch({
         type: 'REMOVE_FAV',
         payload: data,
       });
     } catch (error) {
       console.error('Error removing favorite:', error);
     }
   };
 };

export const filterCards = (status) => {
  return {
    type: 'FILTER',
    payload: status
  }
}

export const orderCards = (id) => {
  return {
    type: 'ORDER',
    payload: id
  }
}
  