import React from "react";
const exercises = JSON.parse(localStorage.getItem("exercises"));

const DisplayExercises = () => (
    exercises.map(exercise => (
    <div>
        <div>Exercise: { exercise.name }</div>
          <div>Sets: 3-5</div>
          {/* <div>Reps: { exercise.purpose }</div> */}
          <div>Weight: { exercise.weight }</div>
          <br/>
    </div>
    ))
)

export default DisplayExercises;