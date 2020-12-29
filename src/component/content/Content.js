import React from 'react';
import Introduce from './introduce/Introduce';
import SkillContainer from '../../container/content/skill/SkillContainer';
import styled from 'styled-components';
import WorkExperience from './work/WorkExperience';

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
		</ContentBlock>
	);
};

export default Content;
