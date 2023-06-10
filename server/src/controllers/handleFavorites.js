let myFavorites = [];

const postFav = (req, res) => {
  const character = req.body;
  myFavorites.push(character);
  return res.status(200).json(myFavorites); 
};

const deleteFav = (req, res) => {
  const { id } = req.params;
  const deletedChar = myFavorites.filter((char) => {
    return char.id !== parseInt(id);
  });
  myFavorites = deletedChar;
  return res.json(myFavorites);
};

module.exports = { postFav, deleteFav };