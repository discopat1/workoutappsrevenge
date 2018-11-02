import React, {Component} from "react";
import 'react-tabulator/lib/styles.css';
import { ReactTabulator } from 'react-tabulator';
import auth0Client from "../Auth";
import API from "../utils/API";


const columns = [
    {title: "Date ", field: "date", align: "center"},
    {title: "Exercise", field: "name", align: "center"},
    {title: "Sets", field: "sets", align: "center"},
    {title: "Reps", field: "reps", align: "center"},
    {title: "Weight", field: "weight", align: "center"}
];

const data = [

]

class Table extends Component {
    state = {
        id:"",
        data:[]
    };

    componentWillMount() {
        if(auth0Client.isAuthenticated()){
          this.setState({id: auth0Client.getUserId()})
          console.log("user checks out")
        }
    };

    componentDidMount() {
        this.handleWorkoutHistory();
    }

    handleWorkoutHistory() {
        API.getUserProfile(this.state.id).then(res => console.log("profile: " + res.data[0].workoutHistory));
    }


    


    render() {
        return(
            <div>
                <ReactTabulator
                    ref={ref => (this.ref = ref)}
                    columns={columns}
                    data={data}
                    rowClick={this.rowClick}
                    // options={options}
                    data-custom-attr="test-custom-attribute"
                    className="custom-css-class"
                    />
            </div>
        );
    }
}

export default Table;

