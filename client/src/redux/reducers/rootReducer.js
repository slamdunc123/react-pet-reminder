import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';
import authReducer from './authReducer';
import alertReducer from './alertReducer';

export default combineReducers({
	itemsReducer: itemsReducer,
	authReducer: authReducer,
	alertReducer: alertReducer,
});
