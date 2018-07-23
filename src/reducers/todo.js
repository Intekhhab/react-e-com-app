import products from "../data/products";

export default function todo(state, action) {
	switch(action.type) {
		case "ADD_TO_CART":
			return {products: state.products, carts: [...state.carts, action.index]};
		case "ADD_NEW_TODO" :
			return {products: state.products, carts: [...state.carts], todolist: [...state.todolist, action.text]};
	}

	if (state)
		return state;

	return {
		products,
		carts: [],
		todolist: [],
	};
}