import {INCREMENT, DECREMENT, ADD_COUNTER, REMOVE_COUNTER} from '../actions/counter';

export default function(state = [], action) {
	console.log(state, '%%%');
	var newState;
	switch(action.type){
		case INCREMENT:
			newState = [...state];
			newState[action.index] = newState[action.index] + 1;
			return newState;
		case DECREMENT:
			newState = [...state];
			newState[action.index] = newState[action.index] - 1;
			return newState;
		case ADD_COUNTER:
			return [...state, 0];

		case REMOVE_COUNTER:
			newState = [...state];
			newState.splice(action.index, 1);
			return newState;
	}
	return [];
}