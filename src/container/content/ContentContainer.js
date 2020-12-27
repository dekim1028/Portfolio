import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Introduce from '../../component/content/introduce/Introduce';

const ContentContainer = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
		});
	}, []);

	return (
		<>
			<Introduce />
		</>
	);
};

export default ContentContainer;
