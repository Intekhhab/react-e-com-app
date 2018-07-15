import {combineReducers} from 'redux';

import todo from './todo';
import counter from './counter';

const rootReducer = combineReducers({
	todo,
	counter,
});

export default rootReducer;