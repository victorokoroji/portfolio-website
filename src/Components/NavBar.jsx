import React from 'react';
import styled, { keyframes } from 'styled-components';
import SocialIcons from '../Components/SocialIcons';

const Container = styled.nav`
	@media (min-width: 660px) {
		margin-top: 0;
		background-color: black;
		height: 70px;
		position: fixed;
		z-index: 5000;
		top: 0;
		width: 100%;
		box-shadow: 5px 5px 6px rgba(128, 128, 128, 0.9);
	}
`;
const NavContainer = styled.nav`
	@media (min-width: 660px) {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 90%;
		margin: 0.5em auto;
	}
`;
const Scale = keyframes`
0% {
		transform: scale(1);
		}
		25% {
			transform: scale(1.2);
		}
50% {
		transform: scale(1.3);
		}
		100% {
			transform: scale(1.4);
		}
`;
const Header = styled.a`
	display: none;
	@media (min-width: 660px) {
		display: block;
		font-size: 0.8em;
		font-weight: bold;
		text-decoration: none;
		color: white;
			animation: ${Scale} 2s infinite; 
		}
	}
`;
const ListItems = styled.ul`
	margin: 0;
	padding: 0;
	list-style-type: none;
	@media (min-width: 660px) {
		// padding-left: 10em;
	}
`;

const ListItem = styled.li`
	padding: 5px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media (min-width: 660px) {
		flex-direction: row;
		padding: 7px;
	}
`;
const Link = styled.a`
	color: black;
	display: block;
	padding: 0.6em 1.5em;
	margin: 0.7em;
	text-decoration: none;
	font-size: 1em;
	transition: all 700ms ease;
	font-weight: 500;
	font-style: normal;
	@media (min-width: 660px) {
		font-size: 0.8em;
		color: white;
		padding: 0.5em 0.8em;
		margin: 0.7em 0.5em;
	}
	&:hover {
		color: white;
		background-color: black;
		border-radius: 7px;
		font-weight: bold;
		@media (min-width: 576px) {
			color: black;
			background-color: white;
			font-weight: initial;
			transform: scale(1.2);
		}
	}
`;
const IconContainer = styled.div`
	display: none;
	@media (min-width: 660px) {
		display: inline-flex;
	}
`;

const Icon = styled(SocialIcons)`
	margin-right: 5px;

	&:hover {
		transform: scale(1.3);
	}
`;

const NavBar = ({ handleMenuOpen }) => {
	return (
		<Container>
			<NavContainer>
				<Header href='#intro' onClick={handleMenuOpen}>
					SIR VIC. PORTFOLIO
				</Header>
				<ListItems>
					<ListItem>
						<Link href='#about' onClick={handleMenuOpen}>
							About Me
						</Link>
						<Link href='#skills' onClick={handleMenuOpen}>
							Skills
						</Link>
						<Link href='#myworks' onClick={handleMenuOpen}>
							My Works
						</Link>
						<Link href='#contact' onClick={handleMenuOpen}>
							Contact
						</Link>
					</ListItem>
				</ListItems>
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
			</NavContainer>
		</Container>
	);
};

export default NavBar;
