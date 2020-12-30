import React from 'react';
import Introduce from './introduce/Introduce';
import SkillContainer from '../../container/content/skill/SkillContainer';
import styled from 'styled-components';
import WorkExperience from './work/WorkExperience';
import OtherExperience from './other/OtherExperience';

const ContentBlock = styled.div`
	min-height: 100vh;
	padding-bottom: 5rem;
`;

const Content = () => {
	return (
		<ContentBlock>
			<Introduce />
			<SkillContainer />
			<WorkExperience />
			<OtherExperience />
		</ContentBlock>
	);
};

export default Content;
