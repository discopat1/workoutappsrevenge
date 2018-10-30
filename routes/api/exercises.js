const router = require("express").Router();
const exerciseListController = require("../../controllers/exerciseListController");

// Matches with "/api/exercises"
router.route("/")
    .get(exerciseListController.findAll)
    .post(exerciseListController.create);
// Route for one rep max through self assessment api/exercises/OneRep
router.route("/estimateOneRep/:id")
    .post(exerciseListController.estimateOneRep)
// Route to get all One rep maxes
router.route("/ActualOneRep")
    .get(exerciseListController.findAllOneReps)
// Routes to create one rep by input and get one rep max by id
router.route("/ActualOneRep/:id")
    .post(exerciseListController.oneRepInput)
    .get(exerciseListController.findOneRep)
// Route to choose exercises based on chosen bodyparts
router.route("/SelectClassic/:id")
    .post(exerciseListController.selectClassic)
// Route to create workout history and populate into user profile
router.route("/WorkoutHistory/:id")
    .post(exerciseListController.createWorkoutInput)
// User profile routes
router.route("/Profile")
    .post(exerciseListController.createProfile)
// Get one rep maxes by ID
router.route("/Profile/:id")
    .get(exerciseListController.findProfilebyId)
// Route ro get all profiles with one rep maxes
router.route("/PopulatedUser")
    .get(exerciseListController.getPopulatedUser)
// Route to seed all exercises (just in case)
router.route("/Seed")
    .post(exerciseListController.seedExercises)
module.exports = router;