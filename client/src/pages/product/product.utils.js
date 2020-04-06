import React from "react";

const customColorText = (
	<span key="customColorText">
		A different color can be chosen. Send your color selection to
		shop@narbonpatricia.com after your purchase
	</span>
);

export const getHtml = (imageUrls, description, customColor) => {
	const imagesHtml = [...imageUrls.split("\n")].map((imgUrl, i) => (
		<img src={imgUrl} alt="garment" key={i} />
	));

	const descriptionHtml = [...description.split("\n")].map((line, i) => (
		<span key={i}>{line}</span>
	));
	if (customColor.toLowerCase() === "yes")
		descriptionHtml.push(customColorText);

	const help = (
		<a href="https://www.narbonpatricia.com/contact.html">need help?</a>
	);

	return { imagesHtml, descriptionHtml, help };
};
