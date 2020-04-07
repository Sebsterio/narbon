import React from "react";

import FbIcon from "../../assets/facebook.svg";
import IgIcon from "../../assets/instagram.svg";

import {
	FooterContainer,
	FooterContent,
	FooterSection,
	FooterElement,
	SocialIcon,
	FooterDivider,
} from "./footer.styles";

const Footer = ({ location }) =>
	location.pathname.includes("/product/") ? null : (
		<FooterContainer>
			<FooterContent>
				<FooterSection>
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
				</FooterSection>
				<FooterSection>
					<FooterElement>© 2020 Narbon</FooterElement>
					<FooterDivider>|</FooterDivider>
					<FooterElement>
						Web Design by <a href="http://www.sebster.dev/">SR</a>
					</FooterElement>
				</FooterSection>
				<FooterSection>
					<FooterElement>
						<SocialIcon href="https://www.facebook.com/narbonpatricia">
							<img src={FbIcon} alt="Facebook link" />
						</SocialIcon>
					</FooterElement>
					<FooterElement>
						<SocialIcon href="https://www.instagram.com/narbonpatricia/">
							<img src={IgIcon} alt="Instagram link" />
						</SocialIcon>
					</FooterElement>
				</FooterSection>
			</FooterContent>
		</FooterContainer>
	);

export default Footer;
