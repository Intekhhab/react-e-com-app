import {
	INCREMENT, 
	INCREMENTBY2,
	INCREMENTBY3,
	INCREMENTBY4,
	INCREMENTBY5,
	DECREMENT, 
	ADD_COUNTER, 
	REMOVE_COUNTER
} from '../actions/actions';

export default function(state = [], action) {
	
	var newState;
	switch(action.type){
		case INCREMENT:
			newState = [...state];
			newState[action.index] = newState[action.index] + 1;
			return newState;
		case INCREMENTBY2:
			newState = [...state];
			newState[action.index] = newState[action.index] + 2;
			return newState;
		case INCREMENTBY3:
			newState = [...state];
			newState[action.index] = newState[action.index] + 3;
			return newState;
		case INCREMENTBY4:
			newState = [...state];
			newState[action.index] = newState[action.index] + 4;
			return newState;
		case INCREMENTBY5:
			newState = [...state];
			newState[action.index] = newState[action.index] + 5;
			return newState;
		case DECREMENT:
			newState = [...state];
			newState[action.index] = newState[action.index] - action.by;
			return newState;
		case ADD_COUNTER:
			return [...state, 0];

		case REMOVE_COUNTER:
			newState = [...state];
			newState.splice(action.index, 1);
			return newState;
	}
	return state;
}