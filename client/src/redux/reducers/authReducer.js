import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
} from '../actions/types';

const initialState = {
	loading: true,
	user: null,
};

export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case REGISTER_SUCCESS:
		case LOGIN_SUCCESS:
			return {
				...state,
				loading: false,
				user: payload,
			};
		case REGISTER_FAIL:
		case LOGIN_FAIL:
			return {
				...state,
				loading: false,
			};
		default:
			return state;
	}
}
