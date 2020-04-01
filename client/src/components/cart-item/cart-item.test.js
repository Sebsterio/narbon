import React from "react";
import { render, shallow } from "enzyme";
import { CartItem } from "./cart-item.component";

it.only("should render CartItem component", () => {
	const mockItem = {
		imageUrl: "www.testImage.com",
		price: 10,
		name: "hats",
		quantity: 2
	};
	const wrapper = shallow(<CartItem item={mockItem} />);
	expect(wrapper).toMatchSnapshot();
});
