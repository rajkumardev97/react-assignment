import { combineReducers } from "redux"; 
import companiesReducer from "./companies.reducer"; 

export default combineReducers({
     companies: companiesReducer 
});
