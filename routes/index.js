var express = require("express");
var router = express.Router();
var indexController = require("../controllers/indexController");

/* GET home page. */
router.get("/", function (req, res) {
    res.render("index", { title: "Express" });
});

router.get("/all", indexController.getAll);

router.get("/:id", indexController.getLivro, indexController.getById);

router.post("/", indexController.createLivro);

router.patch("/:id", indexController.getLivro, indexController.updateLivro);

router.delete("/:id", indexController.getLivro, indexController.deleteLivro);

module.exports = router;
