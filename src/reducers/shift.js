
import {MOVERIGHT, MOVELEFT} from '../actions/actions';
export default function shiftReducer(state = [], action) {
	let newState;

	switch(action.type){
		case MOVERIGHT:
			newState = {item: [[], []]};
			newState.item[0] = [...state.item[0]];
			newState.item[1] = [...state.item[1]];

			newState.item[0] = state.item[0].filter((e, i, ar) => {
				return action.items.indexOf(e.title) < 0
			});

			let filter2 = state.item[0].filter((e, i, ar) => {
				return action.items.indexOf(e.title) > -1
			});

			newState.item[1] = newState.item[1].concat(filter2)
			return newState;
		case MOVELEFT:
			newState = {item: [[], []]};
			newState.item[0] = [...state.item[0]];
			newState.item[1] = [...state.item[1]];

			newState.item[1] = state.item[1].filter((e, i, ar) => {
				return action.items.indexOf(e.title) < 0
			});

			let filter1 = state.item[1].filter((e, i, ar) => {
				return action.items.indexOf(e.title) > -1
			});

			newState.item[0] = newState.item[0].concat(filter1)
			return newState;
	}

	return {
		item: [
			[
				{
				title: 'Item1',
				}, 
				{
					title: 'Item2',
				},
				{
					title: 'Item3',
				}, 
				{
					title: 'Item4',
				},
				{
					title: 'Item5',
				}, 
				{
					title: 'Item6',
				},
				{
					title: 'Item7',
				}, 
				{
					title: 'Item8',
				},
				{
					title: 'Item9',
				}, 
				{
					title: 'Item10',
				}
			],[
				{
					title: 'Item11',
				}
			]
		]
	}
}