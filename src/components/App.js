import React from "react"; 
import {connect} from "react-redux";
import * as actions from "../actions";

class App extends React.Component {

    componentWillMount() {
        
        var empData = [{
            name: "Mayank"
        }, {
            name: "Anshul"
        }];

        this.props.employeeList(empData)
    }

    renderEmployees() {
        if(this.props.employees) {
            return this.props.employees.map((employee) => {
                return <div key={employee.name}>{employee.name}</div>
            })
        }
    }

    render() {
        return (
            <div>
                <b>This is Child Component</b>
                {this.renderEmployees()}
            </div>
        )
    }
} 

function mapStateToProps(state) {
    return {
        employees: state.employees
    }
}

export default connect(mapStateToProps, actions)(App)