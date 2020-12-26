import React from 'react';
import styled from 'styled-components';
import Profile from './Profile';

const MainBlock = styled.div`
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
`;

const Main = () => {
	return (
		<MainBlock>
			<Profile />
		</MainBlock>
	);
};

export default Main;
