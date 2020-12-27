import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { CgPushChevronDown, CgMail } from 'react-icons/cg';
import {
	FcVoicePresentation,
	FcBriefcase,
	FcList,
	FcCommandLine,
} from 'react-icons/fc';

const MenuBlock = styled.div`
	width: 125px;
	height: 100%;
	position: fixed;
	top: 0;
	right: -80px;
	display: flex;
	align-items: center;
	transition: 1s;
	&.showMenu {
		right: 0px;
	}
`;

const DownBtn = styled(CgPushChevronDown)`
	position: relative;
	transform: rotate(270deg) translateY(-50%);
	margin: 0 auto;
	color: rgba(0, 0, 0, 0.5);
	font-size: 35px;
	transition: 1s;

	@keyframes move {
		0% {
			left: 20px;
		}
		25% {
			left: 18px;
		}
		50% {
			left: 15px;
		}
		75% {
			left: 12px;
		}
		100% {
			left: 10px;
		}
	}

	animation-name: move;
	animation-duration: 0.5s;
	animation-iteration-count: infinite;
	animation-direction: alternate;
	animation-fill-mode: forwards;

	&.showMenu {
		animation-play-state: paused;
	}
`;

const MenuList = styled.div`
	width: 90px;
	height: 380px;
	background: rgba(0, 0, 0, 0.3);
	border-radius: 20px;
	padding: 10px;

	@media (max-width: 768px) {
		width: 70px;
		height: 330px;
	}
`;

const MenuItemBlock = styled.a`
	margin: 10px 0;
`;

const MenuItemImage = styled.div`
	width: 60px;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px auto;
	background: rgba(0, 0, 0, 0.4);
	border-radius: 10px;
	font-size: 50px;
	transition: 0.3s;
	color: white;

	&:hover {
		background: rgba(0, 0, 0, 0.6);
	}

	@media (max-width: 768px) {
		width: 50px;
		height: 50px;
	}
`;

const SpeechBubble = styled.div`
	width: 100px;
	position: absolute;
	transform: translate(-110px, 15px);
	padding: 5px;
	background: rgba(255, 255, 255, 0.8);
	border-radius: 5px;
	text-align: center;
	color: black;
	font-size: 10pt;
	display: none;

	@media (max-width: 768px) {
		transform: translate(-25px, 0px);
	}

	&:before {
		width: 0;
		height: 0;
		position: absolute;
		left: 85%;
		transform: scaleY(0.8) translate(15px, -3px);
		content: ' ';
		border: solid transparent;
		border-color: rgba(56, 77, 157, 0);
		border-left-color: rgba(255, 255, 255, 0.8);
		border-width: 11px;
		pointer-events: none;
	}

	&.multiline {
		transform: translate(-110px, 7px);
		&:before {
			bottom: 6px;
		}
	}

	&.show {
		display: block;
	}
`;

const Menu = ({
	showMenu,
	speechBubble,
	onShowMenu,
	onShowSpeechBubble,
	onHideSpeechBubble,
}) => {
	return (
		<MenuBlock className={cn({ showMenu })}>
			<DownBtn className={cn({ showMenu })} onClick={onShowMenu} />
			<MenuList>
				<MenuItemBlock
					href="#introduce"
					onMouseOver={() => onShowSpeechBubble('introduce')}
					onMouseOut={() => onHideSpeechBubble('introduce')}
				>
					<SpeechBubble className={cn({ show: speechBubble.introduce })}>
						Introduce
					</SpeechBubble>
					<MenuItemImage>
						<FcVoicePresentation />
					</MenuItemImage>
				</MenuItemBlock>
				<MenuItemBlock
					href="#skill"
					onMouseOver={() => onShowSpeechBubble('skill')}
					onMouseOut={() => onHideSpeechBubble('skill')}
				>
					<SpeechBubble className={cn({ show: speechBubble.skill })}>
						Skill
					</SpeechBubble>
					<MenuItemImage>
						<FcList />
					</MenuItemImage>
				</MenuItemBlock>
				<MenuItemBlock
					href="#work_exp"
					onMouseOver={() => onShowSpeechBubble('work_exp')}
					onMouseOut={() => onHideSpeechBubble('work_exp')}
				>
					<SpeechBubble
						className={cn({ show: speechBubble.work_exp, multiline: true })}
					>
						Work Experience
					</SpeechBubble>
					<MenuItemImage>
						<FcBriefcase />
					</MenuItemImage>
				</MenuItemBlock>
				<MenuItemBlock
					href="#other_exp"
					onMouseOver={() => onShowSpeechBubble('other_exp')}
					onMouseOut={() => onHideSpeechBubble('other_exp')}
				>
					<SpeechBubble
						className={cn({ show: speechBubble.other_exp, multiline: true })}
					>
						Other Experience
					</SpeechBubble>
					<MenuItemImage>
						<FcCommandLine />
					</MenuItemImage>
				</MenuItemBlock>
				<MenuItemBlock
					href="#contact"
					onMouseOver={() => onShowSpeechBubble('contact')}
					onMouseOut={() => onHideSpeechBubble('contact')}
				>
					<SpeechBubble className={cn({ show: speechBubble.contact })}>
						Contact
					</SpeechBubble>
					<MenuItemImage>
						<CgMail />
					</MenuItemImage>
				</MenuItemBlock>
			</MenuList>
		</MenuBlock>
	);
};

export default Menu;
