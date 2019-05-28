import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import EmployeeApp from "./src/EmployeeApp";

const initialState = {
  1: {
    empid: 1,
    empName: "Employee one",
    empSalary: 10000.0
  },
  2: {
    empid: 2,
    empName: "Employee Two",
    empSalary: 20000.0
  },
  3: {
    empid: 3,
    empName: "Employee Three",
    empSalary: 30000.0
  },

  4: {
    empid: 4,
    empName: "Employee Four",
    empSalary: 40000.0
  }
};

//fun fact about redux create 5-6 redux apps and redux is no more hard

//in this what reducer does is if performance employee is good then give 20% incremt in its salary ele ////////decremt in itssalary
const reducer = (state = initialState, action) => {
  let initalSalary;
  let increment;
  let newSalary;
  let employeeObject;
  if (action.id) {
    initalSalary = state[action.id].empSalary;
    increment = (initalSalary / 100) * 20;
  }
  switch (action.type) {
    case "GOOD_PERFORMANCE":
      newSalary = initalSalary + increment;
      employeeObject = state[action.id];
      employeeObject.empSalary = newSalary;
      //return new state
      return Object.assign({}, state);
      break;
    case "BAD_PERFORMANCE":
      newSalary = initalSalary - increment;
      employeeObject = state[action.id];
      employeeObject.empSalary = newSalary;
      //return new state
      return Object.assign({}, state);
      break;
  }
  return state;
};

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <EmployeeApp />
      </Provider>
    );
  }
}
