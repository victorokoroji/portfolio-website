import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import victor from '../Assets/Images/victor.jpg';
import { init } from 'ityped';
import Button from '../Components/Button';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.compat.css';

const Wrapper = styled.div`
	width: 100%;
	// height: calc(100vh - 70px);
	top: 70px;
	position: relative;
	scroll-snap-type: y mandatory;
	margin-bottom: 2em;
`;
const Section = styled.section`
	scroll-snap-align: start;
	width: 90%;
	margin: auto;
	padding-top: 5em;
	display: flex;
	flex-direction: column;
	@media (min-width: 660px) {
		margin: auto;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`;
const Header = styled.header`
flex-basis: 1;
font-style = normal;
line-height: 1.7;
margin-bottom: 2em;

`;
const Title = styled.h1`
	font-size: 2.3em;
	font-weight: 700;
`;
const Text = styled(Title)`
	font-size: 1.3em;
	color: grey;
	.ityped-cursor {
		color: black;
		animation: blink 1s infinite;
	}
	@keyframes blink {
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;

const Span = styled.span`
	color: grey;
	font-weight: 700;
`;
const StyledButton = styled(Button)`
	padding: 0.4em 1.5em;
	color: white;
	font-weight: 400;
	font-size: 1em;
	margin-top: 1.5em;
	display: block;
	max-width: 110px;
	text-align: center;
	border-radius: 0.2em;
	outline: none;
	background-color: black;
	transition: all 500ms ease;
	border: 2px solid black;
	text-decoration: none;
	&:hover {
		background-color: white;
		color: black;

		font-weight: 700;
	}
`;

const ImageContainer = styled.div`
	flex-basis: 1;
	width: 90%;
	height: 90%;
	margin: auto;
    @media (min-width: 660px) {
	width: initial;
	height: initial;
	margin: initial;
`;
const Image = styled.img`
	border-radius: 200px;
	max-width: 500px;
	max-height: 500px;
	&:hover {
		filter: grayscale(100);
		transition: all 2s ease;
	}
	@media (min-width: 660px) {
		max-width: 350px;
		max-height: 350px;
	}
`;

const Intro = () => {
	const textRef = useRef();
	useEffect(() => {
		init(textRef.current, {
			showCursor: true,
			backdelay: 2000,
			backSpeed: 50,
			typeSpeed: 300,
			strings: ['Front-end Web Developer', 'UI/UX Designer'],
		});
	}, []);
	return (
		<Wrapper id='intro'>
			<Section>
				<Header>
					<ScrollAnimation
						animateIn='bounceInLeft'
						animateOut='bouceOutRight'
						duration={2}
					>
						<Title primary>I'm Okoroji Victor</Title>
						<Text>
							A <Span ref={textRef}> </Span>
						</Text>
					</ScrollAnimation>
					<ScrollAnimation
						animateIn='zoomIn'
						animateOut='zoomOut'
						duration={3}
						offset={100}
					>
						<StyledButton as='a' href='#contact'>Hire me</StyledButton>
					</ScrollAnimation>
				</Header>
				<ImageContainer>
					<ScrollAnimation
						animateIn='bounceInRight'
						animateOut='bouceOutLeft'
						duration={2}
					>
						<Image src={victor} />
					</ScrollAnimation>
				</ImageContainer>
			</Section>
		</Wrapper>
	);
};

export default Intro;
