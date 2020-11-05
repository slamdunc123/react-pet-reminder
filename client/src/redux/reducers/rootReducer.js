import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';
import authReducer from './authReducer';

export default combineReducers({
	itemsReducer: itemsReducer,
	authReducer: authReducer,
});
