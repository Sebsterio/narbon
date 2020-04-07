const BASE_SHIPPING_COST = 12;
const FREE_SHIPPING_THRESHOLD = 300;

export const cost = (shippingTo, total) =>
	shippingTo === "eu" && total >= FREE_SHIPPING_THRESHOLD
		? 0
		: BASE_SHIPPING_COST;
