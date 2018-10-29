import React, { Component } from "react";
const exercises = JSON.parse(localStorage.getItem("exercises"));




class DisplayExercises extends Component {
    constructor(props) {
        super(props)
        this.getReps = this.getReps.bind(this);
    }
     getReps = () => {
        this.props.getReps();
     }   
     
        
    render() {
        return (
        exercises.map(exercise => (
        <div>
            <div>Exercise: { exercise.name }</div>
            <div>Sets: 3-5</div>
            <div>Reps: { this.getReps } </div>
            <div>Weight: { exercise.weight }</div>
            <br/>
        </div>
    ))
        )
    }
}

export default DisplayExercises;