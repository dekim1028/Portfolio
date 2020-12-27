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

const Wrap = styled.div`
	width: 45%;
	height: 100%;
	transform: skewY(5deg);
`;

const Content = styled.div`
	padding: 40px 0;
`;

const Title = styled.h1`
	margin: 0;
	padding-bottom: 5px;
	border-bottom: 3px solid white;
	color: white;
	text-align: right;
`;

const SkillList = styled.ul`
	color: white;
`;

const SkillListItem = styled.li``;

const Skill = ({ menu, onClose, onClickMenu, onHoverMenu, onOutMenu }) => {
	return (
		<SkillBlock id="skill">
			<Wrap>
				<Content data-aos="fade-left">
					<Title>Skill</Title>
					<SkillList>
						<SkillListItem>
							Front-End: JavaScript, React.js, HTML/CSS
						</SkillListItem>
						<SkillListItem>
							Back-End: Java, Spring, Node.js, AWS (EC2, Route53)
						</SkillListItem>
						<SkillListItem>Database: MySql, Oracle, MongoDB</SkillListItem>
						<SkillListItem>Server: NginX, tomcat7, Apache</SkillListItem>
					</SkillList>
				</Content>
			</Wrap>
		</SkillBlock>
	);
};

export default Skill;
