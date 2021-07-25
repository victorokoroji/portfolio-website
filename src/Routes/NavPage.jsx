import React from 'react';
import styled,{css} from 'styled-components';
import Button from '../Components/Button';
import NavBar from '../Components/NavBar';
import SocialIcons from '../Components/SocialIcons';

const Wrapper = styled.div`
	width: 100%;
	height: calc(100vh - 60px);
	padding-top: 3em;
	position: fixed;
	top: 60px;
	right: -100%;
	background-color: white;
	transition: all 1.5s ease;
	z-index: 3;
	${({ menuOpen }) =>
		menuOpen &&
		css`
			right: 0;
		`}
	@media (min-width: 660px) {
		transform: none;
		display: none;
	}
`;
const StyledButton = styled(Button)`
	padding: 0.6em;
	border: 2px solid black;
	color: black;
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 150px;
	margin: 3em auto;
	font-size: 0.8em;
	border-radius: 0.5em;
	text-decoration: none;
	transition: all 500ms ease-in;
	&: hover {
		background-color: black;
		color: white;
	}
`;

const Footer = styled.footer`
	margin-top: 5em;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const IconContainer = styled.div`
	display: inline-flex;
`;

const Icon = styled(SocialIcons)`
	transition: all 500ms ease-in;
	margin-right: 10px;
	&:hover {
		transform: scale(1.3);
	}
`;
const NavPage = ({menuOpen, handleMenuOpen}) => {
	return (
		<Wrapper menuOpen={menuOpen}>
			<StyledButton as='a' href='#contact' onClick={handleMenuOpen}>
				{' '}
				Reach out to me
			</StyledButton>
			<NavBar handleMenuOpen={handleMenuOpen} />
			<Footer>
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
						icon='https://instagram.com/okorojivictor/'
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
			</Footer>
		</Wrapper>
	);
};

export default NavPage;
