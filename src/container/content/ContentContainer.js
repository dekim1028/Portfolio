import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Content from '../../component/content/Content';

const ContentContainer = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
		});
	}, []);

	return <Content />;
};

export default ContentContainer;
