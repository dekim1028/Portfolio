import React from 'react';
import Introduce from './introduce/Introduce';
import SkillContainer from '../../container/content/skill/SkillContainer';
import styled from 'styled-components';

const ContentBlock = styled.div`
	min-height: 100vh;
	padding-bottom: 5rem;
`;

const Content = () => {
	return (
		<ContentBlock>
			<Introduce />
			<SkillContainer />
		</ContentBlock>
	);
};

export default Content;
