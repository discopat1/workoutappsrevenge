const db = require("../models");

const findOneRep = async id => db.OneRepMax.findById(id);


const findWeight = async function(id, data, purpose) {
    for (var i = 0; i < data.length; i++) {
       console.log('ID========', id)
       const datum = data[i];
       const { name } = data[i];
       const oneRep = await findOneRep(id);
        switch(name) {
            case "Deadlift":
            maxWeight = oneRep.squat * 1.2
            purposeWeight(maxWeight);
            break;
            case "Romanian Deadlift":
            maxWeight = oneRep.squat * 1.1
            purposeWeight(maxWeight);
            break;
            case "Single-Leg Romanian Deadlift":
            maxWeight = oneRep.squat * 0.5
            purposeWeight(maxWeight);
            break;
            case "Sumo Deadlift":
            maxWeight = oneRep.squat * 1.25
            purposeWeight(maxWeight);
            break;
            case "Hip Thrusts":
            maxWeight = oneRep.squat * 0.45
            purposeWeight(maxWeight);
            break;
            case "Snatch":
            maxWeight = oneRep.squat * 0.66
            purposeWeight(maxWeight);
            break;
            case "Clean":
            maxWeight = oneRep.squat * 0.8
            purposeWeight(maxWeight);
            break;
            case "Jerk":
            maxWeight = oneRep.squat * 0.84
            purposeWeight(maxWeight);
            break;
            case "Front Squat":
            maxWeight = oneRep.squat * 0.85
            purposeWeight(maxWeight);
            break;
            case "Goblet Squat":
            maxWeight = oneRep.squat * 0.7
            purposeWeight(maxWeight);
            break;
            case "Back Squat":
            maxWeight = oneRep.squat * 1
            purposeWeight(maxWeight);
            break;
            case "Pistol Squat":
            maxWeight = oneRep.squat * 0.45
            purposeWeight(maxWeight);
            break;
            case "Cossack Squat":
            maxWeight = oneRep.squat * 0.45
            purposeWeight(maxWeight);
            break;
            case "Reverse Lunge":
            maxWeight = oneRep.squat * 0.65
            purposeWeight(maxWeight);
            break;
            case "Step-ups":
            maxWeight = oneRep.squat * 0.45
            purposeWeight(maxWeight);
            break;
            case "Bulgarian spilt squats":
            maxWeight = oneRep.squat * 0.45
            purposeWeight(maxWeight);
            break;
            case "Calf raises":
            maxWeight = oneRep.squat * 0.45
            purposeWeight(maxWeight);
            break;
            case "Leg Extensions":
            maxWeight = oneRep.squat * 0.45
            purposeWeight(maxWeight);
            break;
            case "GHD Hamstring Curls":
            maxWeight = oneRep.squat * 0.35
            purposeWeight(maxWeight);
            break;
            case "Leg Abductions":
            maxWeight = oneRep.squat * 0.25
            purposeWeight(maxWeight);
            break;
            case "Overhead Press":
            maxWeight = oneRep.bench * 0.6
            purposeWeight(maxWeight);
            break;
            case "Lateral raise":
            maxWeight = oneRep.bench * 0.2
            purposeWeight(maxWeight);
            break;
            case "Reverse flys":
            maxWeight = oneRep.bench * 0.17
            purposeWeight(maxWeight);
            break;
            case "Shrugs":
            maxWeight = oneRep.bench * 1
            purposeWeight(maxWeight);
            break;
            case "Facepulls":
            maxWeight = oneRep.bench * 0.4
            purposeWeight(maxWeight);
            break;
            case "External Rotators":
            maxWeight = oneRep.bench * 0.3
            purposeWeight(maxWeight);
            break;
            case "Back extension":
            maxWeight = oneRep.squat * 0.45
            purposeWeight(maxWeight);
            break;
            case "Straight arm pull down":
            maxWeight = oneRep.bench * 0.75
            purposeWeight(maxWeight);
            break;
            case "Bench press":
            maxWeight = oneRep.bench * 1.0
            purposeWeight(maxWeight);
            break;
            case "Incline bench press":
            maxWeight = oneRep.bench * 0.8
            purposeWeight(maxWeight);
            break;
            case "Decline bench press":
            maxWeight = oneRep.bench * 1.05
            purposeWeight(maxWeight);
            break;
            case "Chest flys":
            maxWeight = oneRep.bench * 0.28
            purposeWeight(maxWeight);
            break;
            case "Cable crossover":
            maxWeight = oneRep.bench * 0.28
            purposeWeight(maxWeight);
            break;
            case "Dips":
            maxWeight = oneRep.squat * 0.105
            purposeWeight(maxWeight);
            break;
            case "Barbell curls":
            maxWeight = oneRep.bench * 0.4
            purposeWeight(maxWeight);
            break;
            case "Dumbell curls":
            maxWeight = oneRep.bench * 0.4
            purposeWeight(maxWeight);
            break;
            case "Hammer curls":
            maxWeight = oneRep.bench * 0.4
            purposeWeight(maxWeight);
            break;
            case "Elevator curls":
            maxWeight = oneRep.bench * 0.4
            purposeWeight(maxWeight);
            break;
            case "Bentover rows":
            maxWeight = oneRep.bench * 0.75
            purposeWeight(maxWeight);
            break;
            case "One arm rows":
            maxWeight = oneRep.bench * 0.38
            purposeWeight(maxWeight);
            break;
            case "Inverted rows":
            maxWeight = oneRep.bench * 0.38
            purposeWeight(maxWeight);
            break;
            case "Deadrows":
            maxWeight = oneRep.bench * 0.85
            purposeWeight(maxWeight);
            break;
            case "Seated rows":
            maxWeight = oneRep.bench * 0.65
            purposeWeight(maxWeight);
            break;
            case "GHD rows":
            maxWeight = oneRep.bench * 0.6
            purposeWeight(maxWeight);
            break;
            case "Isometric YWT's":
            maxWeight = oneRep.bench * 0.15
            purposeWeight(maxWeight);
            break;
            case "Overhand pull-ups":
            maxWeight = oneRep.bench * 0.85
            purposeWeight(maxWeight);
            break;
            case "Underhand pull-ups":
            maxWeight = oneRep.bench * 0.90
            purposeWeight(maxWeight);
            break;
            case "Switch-grip pull-ups":
            maxWeight = oneRep.bench * 0.88
            purposeWeight(maxWeight);
            break;
            case "Internal rotater pull-ups":
            maxWeight = oneRep.bench * 0.85
            purposeWeight(maxWeight);
            break;
            case "Neutral-grip pull-ups":
            maxWeight = oneRep.bench * 0.90
            purposeWeight(maxWeight);
            break;
            case "Skull crushers":
            maxWeight = oneRep.bench * 0.3
            purposeWeight(maxWeight);
            break;
            case "Tricep extensions":
            maxWeight = oneRep.bench * 0.3
            purposeWeight(maxWeight);
            break;
            case "Tricep pushdowns":
            maxWeight = oneRep.bench * 0.3
            purposeWeight(maxWeight);
            break;
            case "Bench dips":
            maxWeight = oneRep.bench * 0.8
            purposeWeight(maxWeight);
            break;
            case "Plank plate slides":
            maxWeight = oneRep.squat * 0.20
            purposeWeight(maxWeight);
            break;
            default:
            maxWeight = "undefined";
            function purposeWeight(weight) {
                if (purpose === "speed") {
                    datum.weight = weight * 0.60
                } else if (purpose === "strength") {
                    datum.weight = weight * 0.75
                } else if (purpose === "sculpt") {
                    datum.weight = weight * 0.65
                }
            }
    
        } // end switch
        console.log("data  ========", data);
        console.log("maxweight", maxWeight)
        console.log("datum ========", datum.weight)
    } // end for loop
    return;
};

module.exports = findWeight;