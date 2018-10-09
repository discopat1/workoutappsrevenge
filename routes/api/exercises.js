const router = require("express").Router();
const exerciseListController = require("../../controllers/exerciseListController");

// Matches with "/api/exercises"
router.route("/")
    .get(exerciseListController.findAll)
    .post(exerciseListController.create);
// Route for one rep max through self assessment api/exercises/OneRep
router.route("/OneRep")
    .post(exerciseListController.createOneRep)
    .get(exerciseListController.findAll);
// Route to update one rep through input or get one rep info for suggested weight api/exercises/OneRep/:id
router.route("/OneRep/:id")
    .put(exerciseListController.actualOneRep)
    .get(exerciseListController.findOneRep)

module.exports = router;