const router = require("express").Router();
const exerciseListController = require("../../controllers/exerciseListController");

// Matches with "/api/exercises"
router.route("/").get(exerciseListController.findAll)
// Route for one rep max through self assessment
router.route("/OneRep")
.post(exerciseListController.estimateOneRep)
.get(exerciseListController.findAll)
// Route to update one rep through input or get one rep info for suggested weight
router.route("/OneRep/:id")
.put(exerciseListController.actualOneRep)
.get(exerciseListController.findOneRep)

module.exports = router;