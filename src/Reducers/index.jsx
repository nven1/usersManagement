import { combineReducers } from "redux";

import searchReducer from './searchReducer';
import usersReducer from './usersReducer';

export default combineReducers({searchReducer, usersReducer})