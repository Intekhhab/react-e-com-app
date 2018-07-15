import {INCREMENT, DECREMENT} from '../actions/counter';

export default function(state = 0, action) {
	console.log(state, '%%%');
	switch(action.type){
		case INCREMENT:
			return state + 1;//{...state, counter: state.counter + 1};
		case DECREMENT:
			return state - 1;
	}
	return state;
}