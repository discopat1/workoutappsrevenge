import React, { Component } from "react";
const exercises = JSON.parse(localStorage.getItem("exercises"));




class DisplayExercises extends Component {
        getReps = () => {
        const purpose = sessionStorage.getItem('purpose');
            if (purpose === 'time') {
                return '3-5'
            } else if (purpose === 'strength') {
                return '8-10'
            } else if (purpose === 'sculpt') {
                return '10-15'
            }
        }
    render() {
        return (
        exercises.map(exercise => (
        <div>
            <div>Exercise: { exercise.name }</div>
            <div>Sets: 3-5</div>
            <div>Reps: { this.getReps }</div>
            <div>Weight: { exercise.weight }</div>
            <br/>
        </div>
    ))
        )
    }
}

export default DisplayExercises;