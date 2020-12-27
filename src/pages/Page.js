import React from 'react';
import MainContainer from '../container/main/MainContainer';
import ContentContainer from '../container/content/ContentContainer';
import MenuContainer from '../container/common/MenuContainer';

const Page = () => {
	return (
		<>
			<MainContainer />
			<ContentContainer />
			<MenuContainer />
		</>
	);
};

export default Page;
