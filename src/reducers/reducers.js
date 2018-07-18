import {combineReducers} from 'redux';

import todo from './todo';
import counter from './counter';
import login from './login';

const rootReducer = combineReducers({
	todo,
	counter,
	login,
});

export default rootReducer;