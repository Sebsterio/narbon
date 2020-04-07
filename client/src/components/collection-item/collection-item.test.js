import React from "react";
import { shallow } from "enzyme";

import { CollectionItem } from "./collection-item.component";

describe("CollectionItem component", () => {
	let wrapper;
	let mockAddItem;
	const thumbUrl = "www.testImage.com";
	const mockName = "black hat";
	const mockPrice = 10;

	beforeEach(() => {
		mockAddItem = jest.fn();

		const mockProps = {
			item: {
				thumbUrl: thumbUrl,
				price: mockPrice,
				name: mockName,
			},
			addItem: mockAddItem,
		};

		wrapper = shallow(<CollectionItem {...mockProps} />);
	});

	it("should render CollectionItem component", () => {
		expect(wrapper).toMatchSnapshot();
	});

	it("should render thumbUrl as a prop on BackgroundImage", () => {
		expect(wrapper.find("BackgroundImage").prop("thumbUrl")).toBe(thumbUrl);
	});

	it("should render name prop in NameContainer", () => {
		expect(wrapper.find("NameContainer").text()).toBe(mockName);
	});
});
