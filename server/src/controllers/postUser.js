const { User } = require('../DB_connection'); 

const postUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send('Faltan datos');
    }

    // Buscar si el usuario ya existe en la base de datos
    let user = await User.findOne({
      where: { email }
    });

    // Si el usuario no existe, crearlo
    if (!user) {
      user = await User.create({ email, password });
    }

    return res.json(user);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
    postUser
};
