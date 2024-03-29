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
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 50px 0;
	background: #fcae44;
	transform: skewY(-5deg);
	box-shadow: 0px 1px 15px #6e6e6e;
`;

const Wrap = styled.div`
	width: 50%;
	height: 100%;
	transform: skewY(5deg);

	@media (max-width: 768px) {
		width: 90%;
	}
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

	@media (max-width: 768px) {
		padding: 0 10px;
		display: block;
	}
`;

const SkillListItem = styled.li`
	width: 33%;
	height: 570px;
	padding: 0 10px;

	@media (max-width: 768px) {
		width: 100%;
		height: auto;

		&:not(:last-child) {
			border-bottom: 1px dashed;
		}
	}
`;

const SubTitle = styled.div`
	display: flex;
	align-items: center;

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

	@media (max-width: 768px) {
		padding: 0;
		padding-bottom: 40px;
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
	visibility: hidden;

	&.show {
		visibility: visible;
	}

	@media (max-width: 768px) {
		position: relative;
		top: -10px;
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
							<div>
								<SubTitle>
									<h2>Hard Skill</h2>
									<VscQuestion
										id="hard"
										onMouseOver={onMouseOverMenu}
										onMouseOut={onMouseOutMenu}
									/>
								</SubTitle>
								<SpeechBubble className={cn({ show: menu.hard })}>
									프로젝트에 적용 가능하며 자주 사용하는 기술
								</SpeechBubble>
							</div>
							<Item>
								<SiReact />
								React.js
							</Item>
							<Item>
								<SiReact />
								React Native
							</Item>
							<Item>
								<SiJavascript />
								JavaScript
							</Item>
							<Item>
								<SiHtml5 />
								HTML / CSS
							</Item>
							<Item>
								<SiGithub />
								Github
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
							<div>
								<SubTitle>
									<h2>Soft Skill</h2>
									<VscQuestion
										id="soft"
										onMouseOver={onMouseOverMenu}
										onMouseOut={onMouseOutMenu}
									/>
								</SubTitle>
								<SpeechBubble className={cn({ show: menu.soft })}>
									습득 후 복습이 필요한 기술
								</SpeechBubble>
							</div>
							<Item>
								<SiNodeDotJs />
								Node.js
							</Item>
							<Item>
								<SiJava />
								Java
							</Item>
							<Item>
								<SiSpring />
								Spring
							</Item>
							<Item>
								<SiAmazonaws />
								AWS (EC2, Route53)
							</Item>
							<Item>
								<SiTypescript />
								TypeScript
							</Item>
						</SkillListItem>
						<SkillListItem>
							<div>
								<SubTitle>
									<h2>Tried Skill</h2>
									<VscQuestion
										id="tried"
										onMouseOver={onMouseOverMenu}
										onMouseOut={onMouseOutMenu}
									/>
								</SubTitle>
								<SpeechBubble className={cn({ show: menu.tried })}>
									습득 중인 기술
								</SpeechBubble>
							</div>
							<Item>
								<SiVueDotJs />
								Vue.js
							</Item>
							<Item>
								<SiMongodb />
								MongoDB
							</Item>
						</SkillListItem>
					</SkillList>
				</Content>
			</Wrap>
		</SkillBlock>
	);
};

export default Skill;
