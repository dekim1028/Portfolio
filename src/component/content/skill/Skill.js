import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import {
	SiReact,
	SiJavascript,
	SiHtml5,
	SiGithub,
	SiAmazonaws,
	SiMysql,
	SiOracle,
	SiNodeDotJs,
	SiMongodb,
	SiJava,
	SiSpring,
	SiVueDotJs,
	SiTypescript,
} from 'react-icons/si';
import { VscQuestion } from 'react-icons/vsc';

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
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0;
	list-style: none;
	color: white;
`;

const SkillListItem = styled.li`
	width: 33%;
	height: 570px;
	padding: 0 10px;
`;

const SubTitle = styled.h2`
	svg {
		margin-left: 10px;
		font-size: 20px;
		vertical-align: middle;
		cursor: help;
	}
`;

const Item = styled.div`
	display: flex;
	align-items: center;
	padding: 20px 0;
	font-size: 18px;
	svg {
		margin-right: 10px;
		font-size: 25px;
	}
`;

const SpeechBubble = styled.div`
	width: fit-content;
	position: absolute;
	top: 21%;
	padding: 5px 15px;
	background: rgba(0, 0, 0, 0.6);
	border-radius: 5px;
	color: white;
	font-size: 9pt;
	z-index: 2;
	display: none;

	&.show {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

const Skill = ({ menu, onMouseOverMenu, onMouseOutMenu }) => {
	return (
		<SkillBlock id="skill">
			<Wrap>
				<Content data-aos="fade-left">
					<Title>Skill</Title>
					<SkillList>
						<SkillListItem>
							<SubTitle>
								Hard Skill
								<VscQuestion
									id="hard"
									onMouseOver={onMouseOverMenu}
									onMouseOut={onMouseOutMenu}
								/>
								<SpeechBubble className={cn({ show: menu.hard })}>
									프로젝트에 적용 가능하며 자주 사용하는 기술
								</SpeechBubble>
							</SubTitle>
							<Item>
								<SiReact />
								React.js
							</Item>
							<Item>
								<SiJavascript />
								JavaScript
							</Item>
							<Item>
								<SiHtml5 />
								HTML/CSS
							</Item>
							<Item>
								<SiGithub />
								Github
							</Item>
							<Item>
								<SiAmazonaws />
								AWS (EC2, Route53)
							</Item>
							<Item>
								<SiMysql />
								MySql
							</Item>
							<Item>
								<SiOracle />
								Oracle
							</Item>
						</SkillListItem>
						<SkillListItem>
							<SubTitle>
								Soft Skill
								<VscQuestion
									id="soft"
									onMouseOver={onMouseOverMenu}
									onMouseOut={onMouseOutMenu}
								/>
								<SpeechBubble className={cn({ show: menu.soft })}>
									기초 지식 습득 후 복습이 필요한 기술
								</SpeechBubble>
							</SubTitle>
							<Item>
								<SiNodeDotJs />
								Node.js
							</Item>
							<Item>
								<SiMongodb />
								MongoDB
							</Item>
							<Item>
								<SiJava />
								Java
							</Item>
							<Item>
								<SiSpring />
								Spring
							</Item>
						</SkillListItem>
						<SkillListItem>
							<SubTitle>
								Tried Skill
								<VscQuestion
									id="tried"
									onMouseOver={onMouseOverMenu}
									onMouseOut={onMouseOutMenu}
								/>
								<SpeechBubble className={cn({ show: menu.tried })}>
									습득 중인 기술
								</SpeechBubble>
							</SubTitle>
							<Item>
								<SiVueDotJs />
								Vue.js
							</Item>
							<Item>
								<SiTypescript />
								TypeScript
							</Item>
						</SkillListItem>
					</SkillList>
				</Content>
			</Wrap>
		</SkillBlock>
	);
};

export default Skill;
