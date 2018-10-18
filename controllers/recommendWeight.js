const db = require("../models");

const findOneRep = async id => db.OneRepMax.findById(id);


const findWeight = async function(id, data) {
    console.log('ID========', id)
    for (var i = 0; i < data.length; i++) {
       console.log('ID========', id)
       const datum = data[i];
       
       const { name } = data[i];
       const oneRep = await findOneRep(id);
       console.log("one rep================", oneRep);
        switch(name) {
            case "Deadlift":
            datum.weight = oneRep.squat * 1.2
            break;
            case "Romanian Deadlift":
            datum.weight = oneRep.squat * 1.1
            break;
            case "Single-Leg Romanian Deadlift":
            datum.weight = oneRep.squat * 0.5
            break;
            case "Sumo Deadlift":
            datum.weight = oneRep.squat * 1.25
            break;
            case "Hip Thrusts":
            datum.weight = oneRep.squat * 0.45
            break;
            case "Snatch":
            datum.weight = oneRep.squat * 0.66
            break;
            case "Clean":
            datum.weight = oneRep.squat * 0.8
            break;
            case "Jerk":
            datum.weight = oneRep.squat * 0.84
            break;
            case "Front squat":
            datum.weight = oneRep.squat * 0.85
            break;
            case "Goblet Squat":
            datum.weight = oneRep.squat * 0.7
            break;
            case "Back Squat":
            datum.weight = oneRep.squat * 1
            break;
            case "Pistol Squat":
            datum.weight = oneRep.squat * 0.45
            break;
            case "Cossack Squat":
            datum.weight = oneRep.squat * 0.45
            break;
            case "Reverse Lunge":
            datum.weight = oneRep.squat * 0.65
            break;
            case "Step-ups":
            datum.weight = oneRep.squat * 0.45
            break;
            case "Bulgarian spilt squats":
            datum.weight = oneRep.squat * 0.45
            break;
            case "Calf raises":
            datum.weight = oneRep.squat * 0.45
            break;
            case "Overhead Press":
            datum.weight = oneRep.bench * 0.6
            break;
            case "Lateral raise":
            datum.weight = oneRep.bench * 0.2
            break;
            case "Reverse flys":
            datum.weight = oneRep.bench * 0.17
            break;
            case "Shrugs":
            datum.weight = oneRep.bench * 1
            break;
            case "Facepulls":
            datum.weight = oneRep.bench * 0.4
            break;
            case "External Rotators":
            datum.weight = oneRep.bench * 0.3
            break;
            case "Back extension":
            datum.weight = oneRep.squat * 0.45
            break;
            case "Straight arm pull down":
            datum.weight = oneRep.bench * 0.75
            break;
            case "Bench press":
            datum.weight = oneRep.bench * 0.1
            break;
            case "Incline bench press":
            datum.weight = oneRep.bench * 0.8
            break;
            case "Decline bench press":
            datum.weight = oneRep.bench * 0.105
            break;
            case "Chest flys":
            datum.weight = oneRep.bench * 0.28
            break;
            case "Cable crossover":
            datum.weight = oneRep.bench * 0.28
            break;
            case "Dips":
            datum.weight = oneRep.squat * 0.105
            break;
            case "Bicep curls":
            datum.weight = oneRep.bench * 0.4
            break;
            case "Bentover rows":
            datum.weight = oneRep.bench * 0.75
            break;
            case "One arm rows":
            datum.weight = oneRep.bench * 0.38
            break;
            case "Inverted rows":
            datum.weight = oneRep.bench * 0.38
            break;
            case "Deadrows":
            datum.weight = oneRep.bench * 0.85
            break;
            case "Seated rows":
            datum.weight = oneRep.bench * 0.65
            break;
            case "GHD rows":
            datum.weight = oneRep.bench * 0.6
            break;
            case "Isometric YWT's":
            datum.weight = oneRep.bench * 0.15
            break;
            case "Overhand pull-ups":
            datum.weight = oneRep.bench * 0.85
            break;
            case "Underhand pull-ups":
            datum.weight = oneRep.bench * 0.90
            break;
            case "Switch-grip pull-ups":
            datum.weight = oneRep.bench * 0.88
            break;
            case "Internal rotater pull-ups":
            datum.weight = oneRep.bench * 0.85
            break;
            case "Neutral-grip pull-ups":
            datum.weight = oneRep.bench * 0.90
            break;
            case "Skull crushers":
            datum.weight = oneRep.bench * 0.3
            break;
            case "Tricep extensions":
            datum.weight = oneRep.squat * 0.85
            break;
            case "Tricep pushdowns":
            datum.weight = oneRep.squat * 0.85
            break;
            case "Bench dips":
            datum.weight = oneRep.squat * 0.85
            break;
            case "Plank plate slides":
            datum.weight = oneRep.squat * 0.85
            break;
            default:
            datum.weight = "undefined"
        }
        // console.log("one rep================", oneRep);
        console.log("data  ========", data);
        console.log("datum ========", datum)
    } // end for
    return;
};

module.exports = findWeight;