import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Introduce from '../../component/content/introduce/Introduce';
import SkillContainer from './skill/SkillContainer';

const ContentContainer = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
		});
	}, []);

	return (
		<>
			<Introduce />
			<SkillContainer />
		</>
	);
};

export default ContentContainer;
