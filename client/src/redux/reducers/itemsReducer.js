import { GET_ITEMS } from '../actions/types';

const initialState = {
	items: [],
	loading: true,
};

export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case GET_ITEMS:
			console.log('GET_ITEMS called', payload);
			return {
				...state,
				items: payload,
				loading: false,
			};

		default:
			return state;
	}
}
