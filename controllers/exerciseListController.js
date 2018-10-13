const db = require("../models");

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
                    style: "compound"
                })
                .then(dbCompound => {
                    selectAccessory()
                    // findWeight(dbCompound)
                })
                //.catch(err => res.status(422).json(err));
        }
        function selectAccessory(dbCompound) {
            db.ExerciseList
                .find({
                    bodyparts: {$in: req.body.bodyparts},
                    style: "accessory"
                })
                .then(dbAccessory => {
                    console.log("RETURN: ", dbCompound)
                    console.log("RETURN ACCESSORY: ", dbCompound)
                    shuffleArray(dbCompound)
                    shuffleArray(dbAccessory)
                    res.json({dbCompound, });
                    // findWeight(dbAccessory)
                })
                .catch(err => res.status(422).json(err));
        }
        
        function shuffleArray(array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array.length = req.body.time;
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
                    squatMax = bodyweight * multiplier;
                };
                pushupMultiplier();
                squatMultiplier();

                const oneRepObj = {
                    bench: pushupMax,
                    squat: squatMax
                };
                console.log("------------", oneRepObj)
                db.OneRepMax.create(oneRepObj)
                res.json(oneRepObj)
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    actualOneRep: function (req, res) {
        db.OneRepMax
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
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
    }



};

module.exports = controller