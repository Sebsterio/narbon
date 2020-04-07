import React from "react";

import {
	FooterContainer,
	FooterContent,
	FooterElement,
	FooterDivider,
} from "./footer.styles";

const Footer = ({ location }) =>
	location.pathname.includes("/product/") ? null : (
		<FooterContainer>
			<FooterContent>
				<FooterElement>
					<a href="https://www.narbonpatricia.com/faqs.html">FAQ</a>
				</FooterElement>
				<FooterDivider>|</FooterDivider>
				<FooterElement>
					<a href="https://www.narbonpatricia.com/termsandconditions.html">
						Terms & Conditions
					</a>
				</FooterElement>
				<FooterDivider>|</FooterDivider>
				<FooterElement>
					<a href="https://www.narbonpatricia.com/privacypolicy.html">
						Privacy Policy
					</a>
				</FooterElement>
				<FooterDivider>|</FooterDivider>
				<FooterElement>
					<a href="https://www.narbonpatricia.com/contact.html">Contact</a>
				</FooterElement>
				<FooterDivider>|</FooterDivider>
				<FooterElement>© 2020 Narbon</FooterElement>
				<FooterDivider>|</FooterDivider>
				<FooterElement>
					Web Design by <a href="http://www.sebster.dev/">SR</a>
				</FooterElement>
			</FooterContent>
		</FooterContainer>
	);

export default Footer;
