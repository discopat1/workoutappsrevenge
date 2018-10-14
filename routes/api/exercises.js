const router = require("express").Router();
const exerciseListController = require("../../controllers/exerciseListController");

// Matches with "/api/exercises"
router.route("/")
    .get(exerciseListController.findAll)
    .post(exerciseListController.create);
// Route for one rep max through self assessment api/exercises/OneRep
router.route("/OneRep")
    .post(exerciseListController.estimateOneRep)
// Route to create one rep through input 
router.route("/ActualOneRep")
    .post(exerciseListController.oneRepWithProfile)
    .get(exerciseListController.findAllOneReps)
    .get(exerciseListController.findOneRep)
// Route to choose exercises based on chosen bodyparts
router.route("/SelectClassic")
    .post(exerciseListController.selectClassic)
// User profile routes
router.route("/Profile")
    .post(exerciseListController.createProfile)
router.route("/Profile/:id")
    .get(exerciseListController.findProfilebyId)
router.route("/PopulatedUser")
    .get(exerciseListController.getPopulatedUser)
module.exports = router;