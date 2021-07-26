import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import SocialIcons from '../Components/SocialIcons';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.compat.css';
import Button from '../Components/Button';
import DownloadOne from '../Assets/Images/DownloadOne.png';
import downloadTwo from '../Assets/Images/downloadTwo.png';
import downloadThree from '../Assets/Images/downloadThree.png';
import git from '../Assets/Images/git.png';
import resume from '../Assets/Images/blog2.png';
const data = [
	{
		id: 1,
		title: 'Form Master with JavaScript',
		image: downloadTwo,
		target: 'https://frontend-form-master.vercel.app/',
	},
	{
		id: 2,
		title: 'Three Column Grid',
		image: downloadThree,
		target: 'https://frontend-social-proof-two.vercel.app/',
	},
	{
		id: 3,
		title: 'Base Apparel',
		image: DownloadOne,
		target: 'https://frontend-base-apparel.vercel.app/',
	},
];

const Wrapper = styled.div`
	width: 100%;
	top: 70px;
	position: relative;
	scroll-snap-type: y mandatory;
	background-color: rgb(29, 28, 28);
`;
const Section = styled.section`
	padding-top: 4em;
	width: 90%;
	margin: auto;
	line-height: 1.5;
`;
const Header = styled.header`
	margin: auto;
	position: relative;
`;
const Title = styled.h1`
	color: white;
	font-size: ${({ primary }) => (primary ? 2 : 1)}em;
	float: ${({ primary }) => (primary ? 'right' : null)};
	clear: both;
	padding-bottom: 1em;
	&: first-letter {
		font-size: ${({ primary }) => primary && 1.8}em;
	}
`;
const Span = styled.span`
	width: 90px;
	height: 3px;
	background-color: white;
	display: flex;
	justify-content: 'center';
	align-items: 'center;
	position: absolute;
	right: 0;
	top: 75px;
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
const StyledButton = styled(Button)`
	padding: 0.5em 1.5em;
	border-radius: 5px;
	color: ${({ primary }) => (primary ? 'black' : 'white')};
	background-color: ${({ primary }) => (primary ? 'white' : 'black')};
	margin-right: 10px;
	font-size: 1em;
	font-style: italic;
	font-weight: 500;
	text-decoration: none;
	border: 2px solid black;
	transition: all 1s ease;
	&: hover {
		color: ${({ primary }) => (primary ? 'white' : 'black')};
		background-color: ${({ primary }) => (primary ? 'black' : 'white')};
	}
`;
const ProjectContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	@media (min-width: 660px) {
		flex-direction: row;
	}
`;
const ProjectLink = styled.div`
	position: absolute;
	background-color: rgba(255, 255, 255, 0.789);
	height: 100%;
	width: 100%;
	z-index: 2;
	top: 0;
	display: none;
	transition: all 2s ease;
	border-radius: 10px;
`;
const Project = styled.div`
	margin: auto;
	width: 90%;
	margin-bottom: 2em;
	border-radius: 10px;
	background-color: black;
	transition: all 2s ease-out;
	position: relative;
	&:hover ${ProjectLink} {
		display: block;
	}

	@media (min-width: 660px) {
		flex-basis: 30%;
		margin-right: 3em;
		margin-top: 3em;
	}
`;

const Link = styled.a`
	margin-top: ${({ secondary }) => (secondary ? 'initial' : 6)}em;
	padding: 0.5em 1em;
	width: ${({ secondary }) => (secondary ? 40 : 40)}%;
	margin-left: auto;
	margin-right: auto;
	background-color: black;
	color: white;
	transition: all 1s ease;
	font-size: 0.8em;
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	border: 2px solid black;
	&:hover {
		color: black;
		background-color: white;
	}
`;
const Image = styled.img`
	object-fit: fill;
	flex-basis: 60%;
	height: 150px;
	margin: 0 auto 0.5em auto;
	display: flex;

	justify-content: center;
	align-items: center;
	@media (min-width: 660px) {
		max-width: 100%;
		height: 200px;
		margin-top: 3em;
	}
`;
const ProjectDesc = styled.div`
	flex-basis: 40%;
	width: 90%;
	margin: auto;
	padding: 4px;
	display: flex;
	justify-content: space-between;
`;
const visit = keyframes`
0%{ opacity: 0.2}
25%{opacity: 0.4}
50%{opacity:0.6}
75%{opacity:0.8}
100%{opacity:1}
`;
const ProjectText = styled.h5`
		color: white;
		text-decoration: none;
		animation: ${visit} 1s infinite;
	}
`;
const Blogs = styled.div`
	color: white;
	position: relative;
	@media (min-width: 660px) {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
const Blog = styled.div`
	max-width: 300px;
	margin: auto;
	padding-bottom: 3em;
	&: :nth-child(1)  {
		width: initial;
		margin: initial;
	}
`;
const Text = styled.p`
	font-size: 2em;
	color: white;
	font-weight: bold;
	text-align: center;
	margin-bottom: 1em;
	&: first-letter {
		font-size: 1.8em;
	}
`;
const Footer = styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 40%;
	margin: 2em auto;
`;
const Icon = styled(SocialIcons)`
	padding: 10px;
	color: white;
	margin-bottom: 3em;
`;
const MyWorks = () => {
	return (
		<Wrapper id='myworks'>
			<Section>
				<Header>
					<ScrollAnimation
						animateIn='rotateIn'
						animateOut='rotateOut'
						duration={2}
						offset={50}
					>
						<Title primary>My Works</Title>
					</ScrollAnimation>
					<ScrollAnimation
						animateIn='bounceInLeft'
						animateOut='bounceoutRight'
						duration={2}
						offset={50}
					>
						<Span></Span>
					</ScrollAnimation>

					<Title as='p'>These are some of my personal works.</Title>
				</Header>
				<Box as='span' span>
					<StyledButton as='a' href='#project' primary>
						Projects
					</StyledButton>
					<StyledButton as='a' href='#blog'>
						Blogs
					</StyledButton>
				</Box>
				<Text id='project'>Projects</Text>
				<ProjectContainer>
					{data.map(d => (
						<ScrollAnimation
							animateIn='zoomIn'
							animateOut='zoomOut'
							duration={2}
						>
							<Project>
								<Image src={d.image} alt='projects' />
								<ProjectDesc>
									<ProjectText slidertext>{d.title}</ProjectText>
								</ProjectDesc>
								<ProjectLink>
									<Link href={d.target} target='_blank'>
										Visit Site
									</Link>
								</ProjectLink>
							</Project>
						</ScrollAnimation>
					))}
				</ProjectContainer>
				<Footer>
					<ProjectText as='h4' text>
						MORE ON
					</ProjectText>
					<Icon
						icon='https://www.github.com/okoroji_victor'
						fgColor='black'
						bgColor='white'
					/>
				</Footer>
				<Text id='blog'>Blogs</Text>
				<Blogs>
					<Blog>
						<ScrollAnimation
							animateIn='backInUp'
							animateOut='backOutDown'
							duration={2}
						>
							<Image src={git} />
						</ScrollAnimation>

						<Link
							secondary
							href='https://vickymarz.hashnode.dev/how-to-make-pull-request-guide-for-beginners'
							target='_blank'
						>
							Read Now
						</Link>
					</Blog>
					<Blog>
						<ScrollAnimation
							animateIn='backInUp'
							animateOut='backOutDown'
							duration={2}
						>
							<Image src={resume} />
						</ScrollAnimation>

						<Link
							secondary
							href='https://vickymarz.hashnode.dev/why-you-shouldnt-have-your-resume-in-your-portfolio'
							target='_blank'
						>
							Read Now
						</Link>
					</Blog>
				</Blogs>
			</Section>
		</Wrapper>
	);
};

export default MyWorks;
