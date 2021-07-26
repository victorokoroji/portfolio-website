import React from 'react';
import styled from 'styled-components';
import Input from '../Components/Input';
import TextArea from '../Components/TextArea';
import Button from '../Components/Button';
import FontawesomeIcons from '../Components/FontAwesomeIcons';
import {
	faCommentAlt,
	faPhoneAlt,
	faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.compat.css';

const Wrapper = styled.div`
	width: 100%;
	height: calc(100vh - 70px);
	top: 70px;
	position: relative;
	scroll-snap-type: y mandatory;
	margin-bottom: 10em;
`;
const Section = styled.div`
padding-top: 2em;
	width: 90%;
	margin: auto;
`;
const Header = styled(Section)`
	margin-top: 1em;
	margin-bottom: 2em;
`;
const Title = styled.h1`
	color: black;
	text-align: center;
	font-weight: 400;
`;
const MessageIcon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Icon = styled(FontawesomeIcons)`
	color: black;
	padding: 5px;
`;
const Span = styled.span`
	width: 100px;
	height: 1px;
	background-color: black;
	display: flex;
	justify-content: 'center';
	align-items: 'center;
`;

const Main = styled(Section)`
	display: flex;
	flex-direction: column;
	@media (min-width: 660px) {
		margin: auto;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`;
const ContactAddress = styled.div`
	flex-basis: 50%;
`;
const ReachOut = styled.div`
	margin-bottom: 5px;
`;
const Text = styled.p`
	color: black;
	padding-bottom: 5px;
`;
const Form = styled.form`
	flex: 50%;
	width: 100%;
	margin-top: 2em;
`;
const StyledInput = styled(Input)`
	padding: 0.8em;
	margin-bottom: 0.2em;
	font-size: 0.9em;
	background-color: black;
	color: white;
	border: none;
	border-radius: 4px;
	outline: none;
	width: 100%;
	&::placeholder {
		color: #grey;
	}
`;
const StyledTextArea = styled(TextArea)`
	padding: 0.7em;
	font-size: 1em;
	background-color: black;
	border-radius: 4px;
	outline: none;
	width: 100%;
	height: 7em;
	color: grey;
`;
const StyledButton = styled(Button)`
	padding: 0.9em;
	color: white;
	background-color: black;
	font-size: 0.8em;
	margin: 1em auto 2.2em auto;
	border-radius: 20px 10px 30px 20px;
	transition: all 2s ease;
	&:hover {
		color: black;
		background-color: white;
	}
`;

const Contact = () => {
	return (
		<Wrapper id='contact'>
			<Section>
				<Header>
					<ScrollAnimation animateIn='zoomIn' animateOut='zoomOut' duration={2}>
						<Title title>Get in Touch</Title>
						<MessageIcon>
							<Span></Span>
							<Icon icon={faCommentAlt} size='3x' />
							<Span></Span>
						</MessageIcon>
					</ScrollAnimation>
				</Header>
				<Main>
					<ContactAddress>
						<ReachOut>
							<Icon icon={faPhoneAlt} size='2x' />
							<Text>Phone</Text>
							<Text>+234 81 466 72 411</Text>
						</ReachOut>
						<ReachOut>
							<Icon icon={faMapMarkerAlt} size='2x' />
							<Text>Location</Text>
							<Text>Mushin, Lagos, Nigeria.</Text>
						</ReachOut>
					</ContactAddress>
					<Form
						name='contact'
						method='POST'
						data-netlify='true'
					>
						<StyledInput type='text' placeholder='Name:*' name='name' />
						<StyledInput
							
							type='email'
							placeholder='Email Address:*'
							name='email'
						/>
						<StyledTextArea text='Text Message' name='message' />
						<StyledButton>Send Message</StyledButton>
					</Form>
				</Main>
			</Section>
		</Wrapper>
	);
};

export default Contact;
