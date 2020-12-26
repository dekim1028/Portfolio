import React from 'react';
import MainContainer from '../container/MainContainer';
import Background from '../component/common/Background';
import MenuContainer from '../container/MenuContainer';

const MainPage = () => {
	return (
		<>
			<Background />
			<MainContainer />
			<MenuContainer />
		</>
	);
};

export default MainPage;
