const router = require("express").Router();

const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFavs");
const postUser = require("../controllers/postUser");

// Obtener información de un personaje por su ID
router.get("/character/:id", getCharById);

// Iniciar sesión
router.post("/login", login);

// Agregar un personaje a la lista de favoritos
router.post("/favorites", postFav);

// Eliminar un personaje de la lista de favoritos por su ID
router.delete("/favorites/:id", deleteFav);

// Registrar un nuevo usuario
router.post("/register", postUser);

module.exports = router;

