const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api/character/';

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(URL + id);
    const data = response.data;
    
    if (data.name) {
      const { name, gender, species, origin, image, status } = data;
      const character = { id, name, gender, species, origin, image, status };
      
      return res.status(200).json(character);
    } else {
      return res.status(404).send('Not found');
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = getCharById;
