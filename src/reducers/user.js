import {USER_PAGE} from '../actions/actions';

export default function(state = {}, action) {
	var newState;
	switch(action.type){
		case USER_PAGE:
			newState = {...state, page: action.page};
			return newState;
	}

	if (state)
		return state;

	return {
		users: [],
		page: 0,
	};
}