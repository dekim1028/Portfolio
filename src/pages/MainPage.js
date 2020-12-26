import React from 'react';
import MainContainer from '../container/content/main/MainContainer';
import Background from '../component/common/Background';
import MenuContainer from '../container/common/MenuContainer';

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
