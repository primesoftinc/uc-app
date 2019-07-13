import { combineReducers } from "redux";
import navigationReducer from './navReducer';

const AppReducer = combineReducers({
    navigationReducer,
});

export default AppReducer;