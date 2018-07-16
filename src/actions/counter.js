export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD_COUNTER = "ADD_COUNTER";
export const REMOVE_COUNTER = "REMOVE_COUNTER";

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

export const decrementCounter = (index) => {
	return {
		type: DECREMENT,
		index,
	}
}

export const removeCounter = (index) => {
	return {
		type: REMOVE_COUNTER,
		index,
	}
}