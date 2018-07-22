export const INCREMENT = 'INCREMENT';
export const INCREMENTBY2 = 'INCREMENTBY2';
export const INCREMENTBY3 = 'INCREMENTBY3';
export const INCREMENTBY4 = 'INCREMENTBY4';
export const INCREMENTBY5 = 'INCREMENTBY5';

export const DECREMENT = 'DECREMENT';
export const ADD_COUNTER = "ADD_COUNTER";
export const REMOVE_COUNTER = "REMOVE_COUNTER";
export const LOGIN = "LOGIN";

export const MOVELEFT = 'MOVELEFT';
export const MOVERIGHT = 'MOVERIGHT';

export const addCounterFunction = () => {
	return {
		type: ADD_COUNTER,
	}
}

export const incrementCounter = (index) => {
	return {
		type: INCREMENT,
		index,
	}
}

export const incrementCounterBy2 = (index) => {
	return {
		type: INCREMENTBY2,
		index,
	}
}

export const incrementCounterBy3 = (dispatch, index) => {
	let action =  {
		type: INCREMENTBY3,
		index,
	};
	dispatch(action);
}

export const incrementCounterBy4 = (index) => {
	let action =  {
		type: INCREMENTBY4,
		index,
	}
	return (dispatch, getState) => {
		//console.log('state,,,,', getState());
		dispatch(action);
	}
}

export const incrementCounterBy5 = (index) => {
	let action =  {
		type: INCREMENTBY5,
		index,
	}
	return new Promise((resolve, reject) => {
		setTimeout(()=> {
			resolve(action);
		}, 0);
	});
}

export const decrementCounter = (by, index) => {
	return {
		type: DECREMENT,
		by,
		index,
	}
}

export const removeCounter = (index) => {
	return {
		type: REMOVE_COUNTER,
		index,
	}
}
export const loginUser = (data) => {
	return {
		type: LOGIN,
		data,
	}
}