import React from 'react';
import styled, { css } from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';

const Wrapper = styled.div`
	width: 100%;
	top: 70px;
	position: relative;
	scroll-snap-type: y mandatory;
	background-color: black;
`;
const Section = styled.section`
	padding-top: 3em;
	width: 90%;
	margin-top: 5em;
	margin: auto;
	line-height: 1.5;
`;

const Header = styled.header`
	text-align: center;
	letter-spacing: 2px;
	&: first-letter {
		font-size: 2em;
	}
`;
const Title = styled.h1`
	color: white;
	font-size: 2em;
	text-align: center;
`;
const Box = styled.div`
	padding-bottom: 3em;
	display: ${({ span }) =>
		span &&
		css`
	flex;
	flex-direction: row;
	margin-top: 1em;`};
`;

const Text = styled.p`
	text-align: justify;
	color: white;
	font-style: ${({ primary }) => (primary ? 'italic' : 'initial')};
	padding: 5px;
	font-weight: ${({ primary }) => (primary ? 'initial' : '400')};
`;

const Skills = () => {
	return (
		<Wrapper id='skills'>
			<Section>
				<Header>
					<ScrollAnimation
						animateIn='rotateIn'
						animateOut='rotateOut'
						duration={2}
						offset = {100}
					>
						<Title>Skills</Title>
					</ScrollAnimation>
				</Header>
				<Box>
					<Text as='h1' primary>
						HTML5
					</Text>
					<ScrollAnimation
						animateIn='flipInX'
						animateOut='flipOutX'
						duration={1}
					>
						<Text as='p'>
							Proficient with the right application of html syntax and
							semantics. Ability to write well structured and readable web
							pages.
						</Text>
					</ScrollAnimation>
				</Box>
				<Box>
					<Text as='h1'>CSS3</Text>
					<ScrollAnimation
						animateIn='flipInX'
						animateOut='flipOutX'
						duration={2}
					>
						<Text as='p'>
							Ability to apply the right styling to a html content and also
							follow strict adherence to UI/UX design. Capable of building a
							responsive website across all devices and platforms using "Flex"
							and "Grid". Proficient with the use of CSS pre-compilers like
							"Sass" and also efficient use of "Styled Component" for React.
						</Text>
					</ScrollAnimation>
				</Box>
				<Box>
					<Text as='h1'>JAVASCRIPT</Text>
					<ScrollAnimation
						animateIn='flipInX'
						animateOut='flipOutX'
						duration={2}
					>
						<Text as='p'>
							Ability to use JavaScript to add functionality to a website.
							Able to write clean, readable, reusable and scalable javascript
							codes. Application of the principles of Data Structure and
							Algorithm in writing codes.
						</Text>
					</ScrollAnimation>
				</Box>
				<Box>
					<Text as='h1'>REACT</Text>
					<ScrollAnimation
						animateIn='flipInX'
						animateOut='flipOutX'
						duration={2}
					>
						<Text as='p'>
							Proficient in buiding a responsive react web applications. Ability
							to structure code that is readable and easy to debug. Capable of
							writing reusable functional components, efficient use of react
							hooks for state management, API calls and other functionality.
						</Text>
					</ScrollAnimation>
				</Box>
			</Section>
		</Wrapper>
	);
};

export default Skills;
