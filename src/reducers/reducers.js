import {combineReducers} from 'redux';

import todo from './todo';
import counter from './counter';
import login from './login';
import shift from './shift';
import user from './user';

/*const combineReducers = reducers => {
  return (state = {}, action) => {
  	
    // Reduce all the keys for reducers from `todos` and `visibilityFilter`
    return Object.keys(reducers).reduce(
      (nextState, key) => {
        // Call the corresponding reducer function for a given key
        nextState[key] = reducers[key] (
          state[key],
          action
        );
        return nextState;
      },
      {} // The `reduce` on our keys gradually fills this empty object until it is returned.
    );
  };
};*/

const rootReducer = combineReducers({
	todo,
	counter,
	login,
  shiftItems: shift,
  user,
});
console.log('%%%%', rootReducer);
export default rootReducer;