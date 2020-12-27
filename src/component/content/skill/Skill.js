import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { IoIosClose, IoIosAdd } from 'react-icons/io';
import { BsQuestionCircle } from 'react-icons/bs';

const SkillBlock = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Wrap = styled.div`
	width: 65vw;
	height: 70vh;
	background: white;
	border-radius: 10px;
	overflow: hidden;
`;

const Header = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	padding: 10px 15px;
	background: #f4f4f4;
	border-bottom: 1px solid #d8d0d0;
`;

const CloseBtn = styled.button`
	width: 14px;
	height: 14px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0;
	border: none;
	border-radius: 10px;
	outline: none;
	background: #df0101;
	cursor: pointer;

	svg {
		font-size: 17px;
		color: #df0101;
	}
	svg:hover {
		color: black;
	}
`;

const TitleBlock = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto;

	img {
		width: 15px;
	}

	h1 {
		margin: 0;
		font-size: 13px;
	}
`;

const SheetBlock = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	padding: 5px 15px;
	background: #f4f4f4;
	border-bottom: 1px solid #d8d0d0;

	svg {
		font-size: 20px;
		color: #6e6e6e;
	}
`;

const SheetList = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

const SheetItem = styled.div`
	margin: 0 5px;
	padding: 4px 20px;
	color: #6e6e6e;
	text-align: center;
	font-size: 11px;
	font-weight: bold;
	border-radius: 5px;
	cursor: pointer;

	&.click {
		color: white;
		background: #00a650;
	}
`;

const SpeechBubble = styled.div`
	width: fit-content;
	position: absolute;
	top: 15.5%;
	transform: translate(-15px, 0px);
	padding: 5px 20px;
	background: rgba(0, 0, 0, 0.6);
	border-radius: 5px;
	color: white;
	font-size: 9pt;
	z-index: 2;
	display: none;

	&:before {
		width: 0;
		height: 0;
		position: absolute;
		bottom: -73%;
		left: 0px;
		transform: translate(15px, 3px);
		content: ' ';
		border: solid transparent;
		border-color: rgba(56, 77, 157, 0);
		border-top-color: rgba(0, 0, 0, 0.6);
		border-width: 11px;
		pointer-events: none;
	}

	svg {
		margin-right: 5px;
		font-size: 10pt;
		color: white;
	}

	&.show {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

const Skill = ({ menu, onClose, onClickMenu, onHoverMenu, onOutMenu }) => {
	return (
		<SkillBlock data-aos="zoom-in">
			<Wrap>
				<Header>
					<CloseBtn onClick={onClose}>
						<IoIosClose />
					</CloseBtn>
					<TitleBlock>
						<img src="/image/content/numbers_icon.png" alt="numbers" />
						<h1>Skill</h1>
					</TitleBlock>
				</Header>
				<SheetBlock>
					<IoIosAdd />
					<SheetList>
						<SheetItem
							id="hard"
							className={cn({ click: menu.hard.click })}
							onClick={onClickMenu}
							onMouseOver={onHoverMenu}
							onMouseOut={onOutMenu}
						>
							Hard Skills
							<SpeechBubble className={cn({ show: menu.hard.hover })}>
								<BsQuestionCircle />
								프로젝트에 적용 가능하며 자주 사용하는 기술
							</SpeechBubble>
						</SheetItem>
						<SheetItem
							id="soft"
							className={cn({ click: menu.soft.click })}
							onClick={onClickMenu}
							onMouseOver={onHoverMenu}
							onMouseOut={onOutMenu}
						>
							Soft Skills
							<SpeechBubble className={cn({ show: menu.soft.hover })}>
								<BsQuestionCircle />
								사용해본 적은 있지만 복습이 필요한 기술
							</SpeechBubble>
						</SheetItem>
						<SheetItem
							id="progressing"
							className={cn({ click: menu.progressing.click })}
							onClick={onClickMenu}
							onMouseOver={onHoverMenu}
							onMouseOut={onOutMenu}
						>
							Progressing Skills
							<SpeechBubble className={cn({ show: menu.progressing.hover })}>
								<BsQuestionCircle />
								현재 습득중인 기술
							</SpeechBubble>
						</SheetItem>
					</SheetList>
				</SheetBlock>
			</Wrap>
		</SkillBlock>
	);
};

export default Skill;
