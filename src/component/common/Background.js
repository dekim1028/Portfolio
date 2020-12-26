import React from 'react';
import styled from 'styled-components';

const BackgroundBlock = styled.div`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	background-image: url('/image/common/background.png');
	background-size: cover;
	background-repeat: no-repeat;
`;

const Background = () => {
	return <BackgroundBlock />;
};

export default Background;
