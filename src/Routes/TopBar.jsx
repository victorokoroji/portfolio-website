import { faAlignRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import styled from 'styled-components';
import FontAwesomeIcons from '../Components/FontAwesomeIcons';
import MediaQuery from 'react-responsive';
import NavPage from './NavPage';
import NavBar from '../Components/NavBar';

const Wrapper = styled.div`
	width: 100%;
	height: 70px;
	background-color: black;
	transition: all 1s ease;
	color: white;
	position: fixed;
	top: 0;
	z-index: 5;
	box-shadow: 5px 5px 6px rgba(120, 120, 120, 0.9);
	&.active {
		background-color: white;
		color: black;
		text-shadow: 2px 2px 6px black;
		font-weight: bolder;
		font-size: 1.2em;
		box-shadow: none;
	}
`;
const Container = styled.div`
	width: 90%;
	margin: auto;
	padding: 25px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Title = styled.a`
	font-size: 1.1em;
	font-weight: 700;
	text-decoration: none;
	color: white;
	&.active{
		color: black;
	}
`;
const Toggle = styled.button`
	color: ${({ menuOpen }) => (menuOpen ? 'black' : 'white')};
	background: none;
	border: none;
	outline: none;
	font-size: 1em;
	padding: 5px;
	transform: rotate(0deg);
	transition: all 0.3s ease-out;
	${({ menuOpen }) => menuOpen && `transform: rotate(360deg)`}
`;

const TopBar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const handleMenuOpen = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<>
			<MediaQuery maxWidth={660}>
				{matches =>
					matches ? (
						<>
							<Wrapper className={menuOpen && 'active'}>
								<Container>
									<Title href='#intro' className={menuOpen && 'active'}> SIR VIC. PORTFOLIO </Title>
									{menuOpen ? (
										<Toggle onClick={handleMenuOpen} menuOpen>
											<FontAwesomeIcons icon={faTimes} size='1x' />
										</Toggle>
									) : (
										<Toggle onClick={handleMenuOpen}>
											<FontAwesomeIcons icon={faAlignRight} size='1x' />
										</Toggle>
									)}
								</Container>
							</Wrapper>
							<NavPage menuOpen={menuOpen} handleMenuOpen={handleMenuOpen} />
						</>
					) : (
						<NavBar />
					)
				}
			</MediaQuery>
		</>
	);
};

export default TopBar;
