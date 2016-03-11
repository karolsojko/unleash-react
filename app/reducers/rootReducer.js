import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import skillsReducer from './skillsReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  skills: skillsReducer
});

export default rootReducer;
