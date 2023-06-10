const router = require("express").Router();

const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const { postFav, deleteFav } = require("../controllers/handleFavorites");

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/favorites", postFav);
router.delete("/favorites/:id", deleteFav);

module.exports = router;