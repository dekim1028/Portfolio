import React from 'react';
import styled from 'styled-components';

const SkillBlock = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 50px 0;
	background: rgb(217, 115, 13);
	transform: skewY(-5deg);
`;

const Skill = ({ menu, onClose, onClickMenu, onHoverMenu, onOutMenu }) => {
	return <SkillBlock id="skill"></SkillBlock>;
};

export default Skill;
