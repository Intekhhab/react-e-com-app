import {INCREMENT, DECREMENT, ADD_COUNTER, REMOVE_COUNTER, LOGIN} from '../actions/actions';

export default function(state = {}, action) {
	var newState;
	switch(action.type){
		case LOGIN:
			newState = action.data;
			return newState;
	}
	return state;
}