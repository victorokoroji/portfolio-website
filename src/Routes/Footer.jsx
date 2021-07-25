import React from 'react';
import styled, { keyframes } from 'styled-components';
import FontawesomeIcons from '../Components/FontAwesomeIcons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import SocialIcons from '../Components/SocialIcons';
import Theme from '../Assets/Images/Theme.jpeg';
import ScrollToTop from '../Helpers/scroll'

const Wrapper = styled.div`
	width: 100%;
	top: 70px;
	bottom: 0;
	position: relative;
	scroll-snap-type: y mandatory;
	background: url(${Theme}) no-repeat;
	background-size: 100vw 100vh;
	object-fit: cover;
`;
const Section = styled.section`

	padding-top: 2em;
	width: 90%;
	margin: auto;
	line-height: 1.5;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Header = styled.header`
	text-align: center;
`;
const Title = styled.h1`
	color: white;
	font-weight: 500;
	font-size: ${({ text }) => (text ? 2 : 0.8)}em;
`;
const ArrowIcon = styled.div`
	display: block;
	background-color: white;
	width: 40px;
	height: 40px;
	margin: 3em auto;
	border-radius: 30px;
`;

const Animate = keyframes`
0% {
    opacity: 0.2;
    transform: translateY(-5px);
}
25%{
     opacity: 0.4;
     transform: translateY(5px);
}
50%{
     opacity: 0.6;
     transform: translateY(-5px);
}
75%{
     opacity: 0.8;
     transform: translateY(5px);
}
100%{
     opacity: 1;
     transform: translateY(-5px);
}`;
const FontIcon = styled(FontawesomeIcons)`
	color: black;
	padding: 5px;
	display: flex;
	justify-content: center;
	margin: auto;
	animation-name: ${Animate};
	animation-duration: 2s;
	animation-iteration-count: infinite;
`;

const Base = styled.div`
	// display: flex;
	// justify-content: center;
	// align-items: center;
`;
const IconContainer = styled.div`
	display: inline-flex;
	margin-left: 20px;
`;

const Icon = styled(SocialIcons)`
	transition: all 500ms ease-in;
	margin-right: 10px;
`;
const Footer = () => {
	return (
		<Wrapper>
			<Section>
				<Header>
					<Title text>Let's work together</Title>
					<Title as='p'>
						I'm available for full-time, freelance and contract work
					</Title>
				</Header>
				<ArrowIcon onClick={ScrollToTop}>
					<FontIcon icon={faArrowUp} size='2x' />
				</ArrowIcon>
				<Base>
					<Title as='p'>(c) 2021 Designed by Okoroji Victor</Title>
					<IconContainer>
						<Icon
							icon='https://facebook.com/okoroji+victor+ebube'
							height='25px'
							width='25px'
							fgColor='#ffffff'
							bgColor='#000000'
						/>
						<Icon
							icon='https://www.linkedin.com/in/okoroji-ebube-8791741a0'
							height='25px'
							width='25px'
							fgColor='#ffffff'
							bgColor='#000000'
						/>
						<Icon
							icon='https://github.com/vickymarz/'
							height='25px'
							width='25px'
							fgColor='#ffffff'
							bgColor='#000000'
						/>
						<Icon
							icon='https://twitter.com/Vicky_marz'
							height='25px'
							width='25px'
							fgColor='#ffffff'
							bgColor='#000000'
						/>
					</IconContainer>
				</Base>
			</Section>
		</Wrapper>
	);
};

export default Footer;
