import { GET_ITEMS } from '../actions/types';
import { DELETE_ITEM } from '../actions/types';

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
		case DELETE_ITEM:
			console.log('DELETE_ITEM called', payload);
			return {
				...state,
				items: state.items.filter((item) => item._id !== payload),
				loading: false,
			};

		default:
			return state;
	}
}
