import React from 'react';
import styled, {css} from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.compat.css';
import Button from '../Components/Button';

const Wrapper = styled.div`
	width: 100%;
	height: calc(100vh - 70px);
	top: 70px;
	position: relative;
	scroll-snap-type: y mandatory;
`;
const Section = styled.section`
	padding-top: 4em;
	width: 90%;
	margin: auto;
	line-height: 1.5;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	@media (min-width: 660px) {
		margin: auto;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`;
const Box = styled.div`
	flex-basis: ${({ primary }) => (primary ? 40 : 60)}%;
	padding-bottom: 4em;
	display: ${({ span }) =>
		span &&
		css`
	flex;
	flex-direction: row;
	margin-top: 1em;`};

	@media (min-width: 660px) {
		padding-bottom: initial;
	}
`;
const Title = styled.h1`
	color: black;
	font-size: ${({ text }) => (text ? 1 : 2)}em;
	text-align: justify;
	&: first-letter {
		font-size: ${({ text }) => (text ? 1 : 2)}em;
	}
	@media (min-width: 660px) {
		margin-top: ${({ text }) => (text && 3)}em;
	}
`;
const Span = styled.span`
	width: 100px;
	height: 3px;
	background-color: black;
	display: flex;
	justify-content: 'center';
	align-items: 'center;
	margin-top: -20px;
`;
const StyledButton = styled(Button)`
	padding: 0.7em;
	border-radius: 5px;
	color: white;
	background-color: black;
	display: block;
	width: 110px;
	text-align: center;
	margin-right: 10px;
	font-size: 0.9em;
	font-style: italic;
	text-decoration: none;
	border: 2px solid black;
	transition: all 1s ease;
	&:hover {
		color: black;
		background-color: white;
	}
`;
const About = () => {
	return (
		<Wrapper id='about'>
			<Section>
				<Box primary>
					<ScrollAnimation
						animateIn='rotateIn'
						animateOut='rotateOut'
						duration={2}
						
					>
						<Title>About me</Title>
					</ScrollAnimation>
					<ScrollAnimation
						animateIn='bounceInRight'
						animateOut='bounceoutLeft'
						duration={2}
						offset={100}
					>
						<Span></Span>
					</ScrollAnimation>
				</Box>
				<Box>
					<ScrollAnimation
						animateIn='backInUp'
						animateOut='backOutDown'
						duration={2}
					>
						<Title as='p' text>
							I'm a multi-focused Frontend Developer who enjoys buiding elegant
							and highly responsive web applications that looks great across all
							devices. I am passionate about learning new technologies and
							expanding my skill set to stay updated. In my spare time, i write
							articles, watch and play football.
						</Title>
					</ScrollAnimation>
					<Box as='span' span>
						<StyledButton as='a' href='#myworks'>
							View Works
						</StyledButton>
					</Box>
				</Box>
			</Section>
		</Wrapper>
	);
};

export default About;
