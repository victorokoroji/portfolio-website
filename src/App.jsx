import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './Helpers/globalStyles';
import TopBar from './Routes/TopBar';
import Intro from './Routes/Intro';
import About from './Routes/About';
import Skills from './Routes/Skills';
import MyWorks from './Routes/MyWorks';
import Contact from './Routes/Contact';
import Footer from './Routes/Footer';

const Wrapper = styled.div`
	height: 100vh;
`;

function App() {
	return (
		<>
			<GlobalStyle />
			<Wrapper>
				<TopBar />
				<Intro />
				<About />
				<Skills />
				<MyWorks />
				<Contact />
				<Footer />
			</Wrapper>
		</>
	);
}

export default App;
