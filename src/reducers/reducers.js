export function rootReducer(state, action) {
	switch(action.type) {
		case "INCREMENT" :
			return [...state];
		case "ADD_TO_CART":
			return {products: state.products, carts: [...state.carts, action.index]}
	}

	return {
		products: [
			{
				title: 'Intekhab',
				desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",

			},
			{
				title: 'Gaurav',
				desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",

			},
			{
				title: 'JS',
				desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",

			},
			{
				title: 'Vipul',
				desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",

			},
			{
				title: 'ReactJS',
				desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",

			},
			{
				title: 'NodeJS',
				desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",

			},
		],
		carts: []
	}
}