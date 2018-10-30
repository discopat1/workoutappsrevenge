import React from "react";
const exercises = JSON.parse(localStorage.getItem("exercises"));




const DisplayExercises = () => (
        
        exercises.map(exercise => (
        <div>
            <ul key={exercise.id}>
                <li>Exercise: { exercise.name }</li>
                <li>Sets: 3-5</li>
                <li>Reps: { exercise.reps } </li>
                <li>Weight: { exercise.weight }</li>
            </ul>
            <br/>
        </div>
        ))
     )
   

export default DisplayExercises;