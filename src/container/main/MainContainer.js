import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Main from '../../component/main/Main';

const MainContainer = () => {
	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);

	return <Main />;
};

export default MainContainer;
