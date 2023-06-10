const login = (req, res) => {
    const access = true;
    const response = { access };

    return res.status(200).json(response);
  };
  
  module.exports = login;
