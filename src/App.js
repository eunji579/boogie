import styled from "styled-components";
import { useState } from "react";
import GlobalStyle from "./GlobalStyle";
import logo from "./assets/logo.svg";
import design1 from "./assets/design_1.png";
import design2 from "./assets/design_2.png";
import design3 from "./assets/design_3.png";
import research1 from "./assets/research_1.png";
import research2 from "./assets/research_2.png";
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
						<ScrollAnimationContainer>
							<img
								src={test}
								alt="test"
								style={{ width: "60vw" }}
							/>
						</ScrollAnimationContainer>
						<Img src={design1} alt="Design 1" />
						<Img src={design2} alt="Design 2" />
						<Img src={design3} alt="Design 3" />
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
		flex-direction: column;
		justify-content: center;
		padding: 0px 20px;
		height: auto;
		gap: 20px;
	}
`;

const Logo = styled.img`
	height: 50px;

	@media (max-width: 768px) {
		height: 40px;
	}

	@media (max-width: 480px) {
		height: 30px;
	}
`;

const Menu = styled.div`
	display: flex;
	gap: 20px;

	@media (max-width: 480px) {
		flex-direction: column;
		align-items: center;
		gap: 10px;
	}
`;

const MenuItem = styled.span`
	font-size: 20px;
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
		font-size: 16px;
		line-height: 22px;
	}
`;
