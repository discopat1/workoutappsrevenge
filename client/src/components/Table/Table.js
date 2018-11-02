import React, {Component} from "react";
import 'react-tabulator/lib/styles.css';
import { ReactTabulator } from 'react-tabulator';
import auth0Client from "../Auth";
import API from "../utils/API";


const columns = [
    {title: "Date ", field: "date", align: "center"},
    {
        title: "Exercise 1",
        columns:[            
            {title: "Exercise", field: "exercise1.name", align: "center"},
            {title: "Sets", field: "exercise1.sets", align: "center"},
            {title: "Reps", field: "exercise1.reps", align: "center"},
            {title: "Weight", field: "exercise1.weight", align: "center"} 
        ],
    },
    {
        title: "Exercise 2",
        columns:[            
            {title: "Exercise", field: "exercise2.name", align: "center"},
            {title: "Sets", field: "exercise2.sets", align: "center"},
            {title: "Reps", field: "exercise2.reps", align: "center"},
            {title: "Weight", field: "exercise2.weight", align: "center"} 
        ],
    },
    {
        title: "Exercise 3",
        columns:[            
            {title: "Exercise", field: "exercise3.name", align: "center"},
            {title: "Sets", field: "exercise3.sets", align: "center"},
            {title: "Reps", field: "exercise3.reps", align: "center"},
            {title: "Weight", field: "exercise3.weight", align: "center"} 
        ],
    },
    {
        title: "Exercise 4",
        columns:[            
            {title: "Exercise", field: "exercise4.name", align: "center"},
            {title: "Sets", field: "exercise4.sets", align: "center"},
            {title: "Reps", field: "exercise4.reps", align: "center"},
            {title: "Weight", field: "exercise4.weight", align: "center"} 
        ],
    },
    {
        title: "Exercise 5",
        columns:[            
            {title: "Exercise", field: "exercise5.name", align: "center"},
            {title: "Sets", field: "exercise5.sets", align: "center"},
            {title: "Reps", field: "exercise5.reps", align: "center"},
            {title: "Weight", field: "exercise5.weight", align: "center"} 
        ],
    },
    {
        title: "Exercise 6",
        columns:[            
            {title: "Exercise", field: "exercise6.name", align: "center"},
            {title: "Sets", field: "exercise6.sets", align: "center"},
            {title: "Reps", field: "exercise6.reps", align: "center"},
            {title: "Weight", field: "exercise6.weight", align: "center"} 
        ],
    },
    {
        title: "Exercise 7",
        columns:[            
            {title: "Exercise", field: "exercise7.name", align: "center"},
            {title: "Sets", field: "exercise7.sets", align: "center"},
            {title: "Reps", field: "exercise7.reps", align: "center"},
            {title: "Weight", field: "exercise7.weight", align: "center"} 
        ],
    },
    {
        title: "Exercise 8",
        columns:[            
            {title: "Exercise", field: "exercise8.name", align: "center"},
            {title: "Sets", field: "exercise8.sets", align: "center"},
            {title: "Reps", field: "exercise8.reps", align: "center"},
            {title: "Weight", field: "exercise8.weight", align: "center"} 
        ],
    }
];

class Table extends Component {
    state = {
        id:"",
        data:[],
        workoutHistory:[]
    };

    componentWillMount() {
        if(auth0Client.isAuthenticated()){
          this.setState({id: auth0Client.getUserId()})
          console.log("user checks out")
          
        }
    };

    componentDidMount() {
        API.getUserProfile(this.state.id).then(res => {
            this.state.workoutHistory.push(res.data[0].workoutHistory)
            this.handleWorkoutHistory(res.data[0].workoutHistory)
        } )        // console.log(this.state.workoutHistory)
        // this.handleWorkoutHistory();
    }

    handleWorkoutHistory(array) {
        console.log("your history is " + this.state.workoutHistory)
        API.findHistory({
            array: array
        })
        .then(res => this.setState({data: res.data}));
    }


    


    render() {
        const data = this.state.data;
        const options = {
            layout: "fitData"
        };
    
        return(
            <div>
                <ReactTabulator
                    ref={ref => (this.ref = ref)}
                    columns={columns}
                    data={data}
                    rowClick={this.rowClick}
                    options={options}
                    data-custom-attr="test-custom-attribute"
                    className="custom-css-class"
                    />
            </div>
        );
    }
}

export default Table;

