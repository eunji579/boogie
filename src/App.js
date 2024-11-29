import styled from "styled-components";
import { useState } from "react";
import GlobalStyle from "./GlobalStyle";
import logo from "./assets/logo.svg";
import design1 from "./assets/design_modi1.png";
import design2 from "./assets/design_modi2.png";
import design3 from "./assets/design_modi3.png";
import design4 from "./assets/design_modi4.png";
import research1 from "./assets/research_final2.png";
import research2 from "./assets/research_modi2.png";
import test from "./assets/test.svg";
import { ScrollAnimationContainer } from "./scroll-animation-container";

function App() {
	const [activeMenu, setActiveMenu] = useState("Design");

	return (
		<>
			<GlobalStyle />
			<Banner activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
			<ImageContainer>
				{activeMenu === "Design" && (
					<FadeIn>
						<Img src={design1} alt="Design 1" />
						<Img src={design2} alt="Design 2" />
						<Img src={design3} alt="Design 3" />
						<Img src={design4} alt="Design 4" />
					</FadeIn>
				)}
				{activeMenu === "Research" && (
					<FadeIn>
						<Img src={research1} alt="Research 1" />
						<Img src={research2} alt="Research 2" />
					</FadeIn>
				)}
			</ImageContainer>
		</>
	);
}

export default App;

const ImageContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 0;
	padding: 0;
	border: 0;
`;

const Img = styled.img`
	width: 100vw;
	margin: 0;
	padding: 0;
	border: 0;
	display: block;
`;

const FadeIn = styled.div`
	display: flex;
	flex-wrap: wrap;
	animation: fadeIn 0.5s ease-in-out;
	@keyframes fadeIn {
		from {
			opacity: 0.2;
		}
		to {
			opacity: 1;
		}
	}
`;

const Banner = ({ activeMenu, setActiveMenu }) => {
	return (
		<BannerContainer>
			<Logo src={logo} alt="Logo" />
			<Menu>
				<MenuItem
					isActive={activeMenu === "Research"}
					onClick={() => setActiveMenu("Research")}
				>
					Research
				</MenuItem>
				<MenuItem
					isActive={activeMenu === "Design"}
					onClick={() => setActiveMenu("Design")}
				>
					Design
				</MenuItem>
			</Menu>
		</BannerContainer>
	);
};

const BannerContainer = styled.div`
	background-color: #ff6f21;
	color: white;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0px 100px;
	height: 100px;

	@media (max-width: 768px) {
		padding: 0px 50px;
		height: 80px;
	}

	@media (max-width: 480px) {
		padding: 0px 20px;
		height: 40px;
	}
`;

const Logo = styled.img`
	height: 50px;

	@media (max-width: 768px) {
		height: 40px;
	}

	@media (max-width: 480px) {
		height: 20px;
	}
`;

const Menu = styled.div`
	display: flex;
	gap: 20px;

	@media (max-width: 480px) {
		align-items: center;
		gap: 5px;
	}
`;

const MenuItem = styled.span`
	font-size: 22px;
	line-height: 28.64px;
	font-family: "Pretendard-Regular";
	font-weight: 700;
	cursor: pointer;
	color: #fff;
	opacity: ${(props) => (props.isActive ? 1 : 0.5)};
	transition: color 0.3s ease, opacity 0.3s ease;

	&:hover {
		opacity: 1;
		color: #fff;
	}

	@media (max-width: 768px) {
		font-size: 18px;
		line-height: 24px;
	}

	@media (max-width: 480px) {
		font-size: 10px;
		line-height: 22px;
	}
`;
