const controller = require("./exerciseListController");
// need to map data since it is array

const findWeight = function(data) {
    // for (let i = 0; i < data.length; i++) {
       
    switch(data) {
        case "Deadlift":
        weight = controller.findOneRep.squat * 1.2
        break;
        case "Romanian Deadlift":
        weight = controller.findOneRep.squat * 1.1
        break;
        case "Single-Leg Romanian Deadlift":
        weight = controller.findOneRep.squat * 0.5
        break;
        case "Sumo Deadlift":
        weight = controller.findOneRep.squat * 1.25
        break;
        case "Hip Thrusts":
        weight = controller.findOneRep.squat * 0.45
        break;
        case "Snatch":
        weight = controller.findOneRep.squat * 0.66
        break;
        case "Clean":
        weight = controller.findOneRep.squat * 0.8
        break;
        case "Jerk":
        weight = controller.findOneRep.squat * 0.84
        break;
        case "Front squat":
        weight = controller.findOneRep.squat * 0.85
        break;
        case "Goblet Squat":
        weight = controller.findOneRep.squat * 0.7
        break;
        case "Back Squat":
        weight = controller.findOneRep.squat * 1
        break;
        case "Pistol Squat":
        weight = controller.findOneRep.squat * 0.45
        break;
        case "Cossack Squat":
        weight = controller.findOneRep.squat * 0.45
        break;
        case "Reverse Lunge":
        weight = controller.findOneRep.squat * 0.65
        break;
        case "Step-ups":
        weight = controller.findOneRep.squat * 0.45
        break;
        case "Bulgarian spilt squats":
        weight = controller.findOneRep.squat * 0.45
        break;
        case "Calf raises":
        weight = controller.findOneRep.squat * 0.45
        break;
        case "Overhead Press":
        weight = controller.findOneRep.bench * 0.6
        break;
        case "Lateral raise":
        weight = controller.findOneRep.bench * 0.2
        break;
        case "Reverse flys":
        weight = controller.findOneRep.bench * 0.17
        break;
        case "Shrugs":
        weight = controller.findOneRep.bench * 1
        break;
        case "Facepulls":
        weight = controller.findOneRep.bench * 0.4
        break;
        case "External Rotators":
        weight = controller.findOneRep.bench * 0.3
        break;
        case "Back extension":
        weight = controller.findOneRep.squat * 0.45
        break;
        case "Straight arm pull down":
        weight = controller.findOneRep.bench * 0.75
        break;
        case "Bench press":
        weight = controller.findOneRep.bench * 0.1
        break;
        case "Incline bench press":
        weight = controller.findOneRep.bench * 0.8
        break;
        case "Decline bench press":
        weight = controller.findOneRep.bench * 0.105
        break;
        case "Chest flys":
        weight = controller.findOneRep.bench * 0.28
        break;
        case "Cable crossover":
        weight = controller.findOneRep.bench * 0.28
        break;
        case "Dips":
        weight = controller.findOneRep.squat * 0.105
        break;
        case "Bicep curls":
        weight = controller.findOneRep.bench * 0.4
        break;
        case "Bentover rows":
        weight = controller.findOneRep.bench * 0.75
        break;
        case "One arm rows":
        weight = controller.findOneRep.bench * 0.38
        break;
        case "Inverted rows":
        weight = controller.findOneRep.bench * 0.38
        break;
        case "Deadrows":
        weight = controller.findOneRep.bench * 0.85
        break;
        case "Seated rows":
        weight = controller.findOneRep.bench * 0.65
        break;
        case "GHD rows":
        weight = controller.findOneRep.bench * 0.6
        break;
        case "Isometric YWT's":
        weight = controller.findOneRep.bench * 0.15
        break;
        case "Overhand pull-ups":
        weight = controller.findOneRep.bench * 0.85
        break;
        case "Underhand pull-ups":
        weight = controller.findOneRep.bench * 0.90
        break;
        case "Switch-grip pull-ups":
        weight = controller.findOneRep.bench * 0.88
        break;
        case "Internal rotater pull-ups":
        weight = controller.findOneRep.bench * 0.85
        break;
        case "Neutral-grip pull-ups":
        weight = controller.findOneRep.bench * 0.90
        break;
        case "Skull crushers":
        weight = controller.findOneRep.bench * 0.3
        break;
        case "Tricep extensions":
        weight = controller.findOneRep.squat * 0.85
        break;
        case "Tricep pushdowns":
        weight = controller.findOneRep.squat * 0.85
        break;
        case "Bench dips":
        weight = controller.findOneRep.squat * 0.85
        break;
        case "Plank plate slides":
        weight = controller.findOneRep.squat * 0.85
        break;
        default:
        weight = "No weight"
    }
// }
    console.log("one rep================", controller.findOneRep);
    console.log("data  ========", data)
    return weight;
};

module.exports = findWeight;