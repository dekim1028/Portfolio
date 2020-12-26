import React from 'react';
import IntroduceContainer from '../container/content/introduce/IntroduceContainer';
import MenuContainer from '../container/MenuContainer';
import Background from '../component/common/Background';

const IntroducePage = () => {
	return (
		<>
			<Background />
			<IntroduceContainer />
			<MenuContainer />
		</>
	);
};

export default IntroducePage;
