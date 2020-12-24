import React from 'react';
import styled from 'styled-components';
import Profile from './Profile';
import MenuContainer from '../container/MenuContainer';

const MainBlock = styled.div`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	background-image: url('/image/common/background.png');
	background-size: 100% 100%;
	background-repeat: no-repeat;
`;

const Main = ({ showMenu, onShowMenu }) => {
	return (
		<MainBlock>
			<Profile />
			<MenuContainer />
		</MainBlock>
	);
};

export default Main;
