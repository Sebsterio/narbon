// ---- aux ----

const selectSameIdAndSize = (cartItem, cartItemModify) =>
	cartItem.id === cartItemModify.id && cartItem.size === cartItemModify.size;

const selectDifferentIdOrSize = (cartItem, cartItemModify) =>
	cartItem.id !== cartItemModify.id || cartItem.size !== cartItemModify.size;

// ---- main ----

export const addItemToCart = (cartItems, cartItemToAdd) => {
	const existingCartItem = cartItems.find((cartItem) =>
		selectSameIdAndSize(cartItem, cartItemToAdd)
	);

	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			selectSameIdAndSize(cartItem, cartItemToAdd)
				? {
						...cartItem,
						quantity: cartItem.quantity + Number(cartItemToAdd.quantity),
				  }
				: cartItem
		);
	}

	return [
		...cartItems,
		{ ...cartItemToAdd, quantity: Number(cartItemToAdd.quantity) },
	];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
	const existingCartItem = cartItems.find((cartItem) =>
		selectSameIdAndSize(cartItem, cartItemToRemove)
	);

	if (existingCartItem.quantity === 1) {
		return cartItems.filter((cartItem) =>
			selectDifferentIdOrSize(cartItem, cartItemToRemove)
		);
	}

	return cartItems.map((cartItem) =>
		cartItem.id === cartItemToRemove.id &&
		cartItem.size === cartItemToRemove.size
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};
