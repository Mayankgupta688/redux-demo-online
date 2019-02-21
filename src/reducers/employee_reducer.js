export default function(state=null, action) {
    if(action.type === "employee_list") {
        return action.employees;
    } else return state;
}