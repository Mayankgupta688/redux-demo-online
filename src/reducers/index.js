import {combineReducers} from "redux";
import employees from "./employee_reducer";

export const rootReducer = combineReducers({
    employees: employees
})