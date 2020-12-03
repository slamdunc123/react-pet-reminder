import { combineReducers } from 'redux';
import petReducer from './petReducer';
import authReducer from './authReducer';
import alertReducer from './alertReducer';

export default combineReducers({
	petReducer: petReducer,
	authReducer: authReducer,
	alertReducer: alertReducer,
});
