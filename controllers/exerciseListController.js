const db = require("../models");
const findWeight = require("./recommendWeight");

// Defining methods for the exerciseListController
var controller = {
    findAll: function (req, res) {
        db.ExerciseList
            .find(req.query)
            .then(dbModel => {
                console.log("RETURNED: ", dbModel)
                res.json(dbModel)
            })
            .catch(err => res.status(422).json(err));
    },

    create: function (req, res) {
        db.ExerciseList
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    selectClassic: function (req, res) {
        console.log("query=======", req.body)
        
        //   Make 2 separate fuctions- one for compound and one for accessory then call accessory after compound has been run
        function selectCompound() {
            db.ExerciseList
                .find({
                    bodyparts: {$in: req.body.bodyparts},
                    style: "compound",
                    equipment: {$in: req.body.equipment}
                })
                .then(dbCompound => {
                    selectAccessory(dbCompound)
                })
        }
        function selectAccessory(dbCompound) {
            db.ExerciseList
                .find({
                    bodyparts: {$in: req.body.bodyparts},
                    style: "accessory",
                    equipment: {$in: req.body.equipment}
                })
                .then(dbAccessory => {
                    console.log("dbcompund====:", dbCompound)
                    console.log("dbAccessory====:", dbAccessory)
                    shuffleArray(dbCompound)
                    shuffleArray(dbAccessory)
                    return findWeight(req.params.id, dbAccessory, req.body.purpose) // going to add req.body.purpose to parameters
                        .then(() => findWeight(req.params.id, dbCompound, req.body.purpose))
                        .then(() => {
                            res.json({dbCompound, dbAccessory})
                    })
                })
                .catch(err => {
                    console.error(err);
                    res.status(422).json(err)
                });
        }
        
        
        function shuffleArray(array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            if (array.length > req.body.time) {
                return array.length = req.body.time;
            }
        }

        selectCompound();
    },

    estimateOneRep: function (req, res) {
        db.SelfAssess
            .create(req.body)
            .then(() => {
                // Multiply body weight by incremental number depending on the number of repetions
                console.log("===========", req.body)
                const maxReps = {
                    pushups: req.body.bench,
                    squats: req.body.squat
                };
                const bodyweight = req.body.weight;
                const pushupBodyweight = req.body.weight * 0.64;
                let multiplier;
                let pushupMax;
                let squatMax;

                function pushupMultiplier() {
                    if (maxReps.pushups === 1) {
                        multiplier = 1;
                    } else if (maxReps.pushups === 0) {
                        multiplier = 0.75;
                    } else {
                        multiplier = ((maxReps.pushups - 1) * 0.04) + 1
                    };
                    pushupMax = pushupBodyweight * multiplier;
                };


                function squatMultiplier() {
                    if (maxReps.squats === 1) {
                        multiplier = 1;
                    } else if (maxReps.squats === 0) {
                        multiplier = 0.75;
                    } else {
                        multiplier = ((maxReps.squats - 1) * 0.03) + 1
                    };
                    squatMax = (bodyweight * multiplier) - bodyweight;
                };
                pushupMultiplier();
                squatMultiplier();

                const oneRepObj = {
                    bench: pushupMax,
                    squat: squatMax
                };
                console.log("------------", oneRepObj)
                return db.OneRepMax.create(oneRepObj)
                
            })
            .then(function(dbOneRep) {
                
                // If a one rep max was created successfully, find one User profile  and push the new one rep's _id to the User's one rep field
                // { new: true } tells the query that we want it to return the updated User profile -- it returns the original by default
                // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
                return db.UserProfile.findOneAndUpdate({ id: req.params.id }, { $set: { oneRepMax: dbOneRep._id } }, { new: true });
            })
            .then(function(dbUserProfile) {
                console.log("--==--==-=", dbUserProfile)
                // If the User Profile was updated successfully, send it back to the client
                res.json(dbUserProfile);
            })
            .catch(function(err) {
                // If an error occurs, send it back to the client
                res.json(err);
            });
    },

    findAllOneReps: function (req, res) {
        db.OneRepMax
            .find(req.query)
            .then(dbModel => {
                console.log(dbModel)
                res.json(dbModel)
            })
            .catch(err => res.status(422).json(err));
    },
    findOneRep: function (req, res) {
        db.OneRepMax
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    createProfile: function (req, res) {
        db.UserProfile
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    
    findProfilebyId: function (req, res) {
        db.UserProfile
            .find({id: req.params.id})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // POST route for saving a one rep max to the db and associating it with a User profile
    // Create a new one rep max in the database
    oneRepInput: function (req, res) {
        console.log("actual one rep---", req.body)
        db.OneRepMax.create(req.body)
        .then(function(dbOneRep) {
            // If a one rep max was created successfully, find one User profile  and push the new one rep's _id to the User's one rep field
            // { new: true } tells the query that we want it to return the updated User profile -- it returns the original by default
            // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
            return db.UserProfile.findOneAndUpdate({ _id: req.params.id }, { $set: { oneRepMax: dbOneRep._id } }, { new: true });
        })
        .then(function(dbUserProfile) {
            // If the User Profile was updated successfully, send it back to the client
            res.json(dbUserProfile);
        })
        .catch(function(err) {
            // If an error occurs, send it back to the client
            res.json(err);
        });
    },
    // Route to create workout input and populate it into user profile
    createWorkoutInput: function (req, res) {
        console.log("req=====",req.body)
        db.WorkoutInput.create(req.body)
        .then(function(dbWorkoutInput) {
            // If a one rep max was created successfully, find one User profile  and push the new one rep's _id to the User's one rep field
            // { new: true } tells the query that we want it to return the updated User profile -- it returns the original by default
            // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
            return db.UserProfile.findOneAndUpdate({ id: req.params.id }, { $push: { workoutHistory: dbWorkoutInput._id } }, { new: true });
        })
        .then(function(dbUserProfile) {
            // If the User Profile was updated successfully, send it back to the client
            res.json(dbUserProfile);
        })
        .catch(function(err) {
            // If an error occurs, send it back to the client
            res.json(err);
        });
    },
    // Route to see what user profile looks like WITH populating
    getPopulatedUser: function(req, res) {
        // Using our User profile model, "find" every user in our db and populate them with associated one rep max
        db.UserProfile.find({})
        // Specify that we want to populate the retrieved User profiles with associated one rep max
        .populate("oneRepMax")
        .populate("workoutHistory")
        .then(function(dbUserProfile) {
            // If any Libraries are found, send them to the client with any associated Books
            res.json(dbUserProfile);
        })
        .catch(function(err) {
            // If an error occurs, send it back to the client
            res.json(err);
        });
    },
    // Route to seed exercises (just in case....)
    seedExercises: function(req, res) {
        db.ExerciseList
        .remove({})
        .then(() => db.ExerciseList.collection.insertMany(req.body))
        .then(data => {
            console.log(data.result.n + " records inserted!");
            process.exit(0);
        })
        .catch(err => {
            console.error(err);
            process.exit(1);
        });
    },
    getWorkoutHistory: function(req, res) {
        
        db.WorkoutInput.find
    }
  




};

module.exports = controller