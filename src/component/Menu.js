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
	width: 100%;
	height: 130px;
	position: fixed;
	bottom: -80px;
	transition: 1s;
	&.showMenu {
		bottom: 0px;
	}
`;

const DownBtn = styled(CgPushChevronDown)`
	position: relative;
	left: 50%;
	right: 0;
	transform: translate(-50%, -50%);
	margin: 0 auto;
	color: rgba(255, 255, 255, 0.5);
	font-size: 35px;
	transition: 1s;

	@keyframes move {
		0% {
			top: 20px;
		}
		25% {
			top: 18px;
		}
		50% {
			top: 15px;
		}
		75% {
			top: 12px;
		}
		100% {
			top: 10px;
		}
	}

	animation-name: move;
	animation-duration: 0.5s;
	animation-iteration-count: infinite;
	animation-direction: alternate;
	animation-fill-mode: forwards;

	&.showMenu {
		animation-play-state: paused;
		bottom: 100px !important;
	}
`;

const MenuList = styled.div`
	width: 600px;
	height: 90px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	background: rgba(255, 255, 255, 0.3);
	border-radius: 20px;
	padding: 10px;

	@media (max-width: 768px) {
		width: 90%;
	}
`;

const MenuItemBlock = styled.div`
	margin: 0 20px;

	@media (max-width: 768px) {
		margin: 0 5px;
	}
`;

const MenuItemImage = styled.div`
	width: 60px;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(255, 255, 255, 0.4);
	border-radius: 10px;
	font-size: 50px;
	transition: 0.3s;

	&:hover {
		background: rgba(255, 255, 255, 0.6);
	}

	@media (max-width: 768px) {
		width: 50px;
		height: 50px;
	}
`;

const SpeechBubble = styled.div`
	width: 100px;
	position: absolute;
	top: 10px;
	transform: translate(-20px, 0px);
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
		bottom: -74%;
		left: 25px;
		transform: translate(15px, 3px);
		content: ' ';
		border: solid transparent;
		border-color: rgba(56, 77, 157, 0);
		border-top-color: rgba(255, 255, 255, 0.8);
		border-width: 11px;
		pointer-events: none;
	}

	&.multiline {
		top: -6px;
		&:before {
			bottom: -45%;
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
					onMouseOver={() => onShowSpeechBubble('myInfo')}
					onMouseOut={() => onHideSpeechBubble('myInfo')}
				>
					<SpeechBubble className={cn({ show: speechBubble.myInfo })}>
						Introduce
					</SpeechBubble>
					<MenuItemImage>
						<FcVoicePresentation />
					</MenuItemImage>
				</MenuItemBlock>
				<MenuItemBlock
					onMouseOver={() => onShowSpeechBubble('stack')}
					onMouseOut={() => onHideSpeechBubble('stack')}
				>
					<SpeechBubble className={cn({ show: speechBubble.stack })}>
						Skill
					</SpeechBubble>
					<MenuItemImage>
						<FcList />
					</MenuItemImage>
				</MenuItemBlock>
				<MenuItemBlock
					onMouseOver={() => onShowSpeechBubble('career')}
					onMouseOut={() => onHideSpeechBubble('career')}
				>
					<SpeechBubble
						className={cn({ show: speechBubble.career, multiline: true })}
					>
						Work Experience
					</SpeechBubble>
					<MenuItemImage>
						<FcBriefcase />
					</MenuItemImage>
				</MenuItemBlock>
				<MenuItemBlock
					onMouseOver={() => onShowSpeechBubble('portfolio')}
					onMouseOut={() => onHideSpeechBubble('portfolio')}
				>
					<SpeechBubble
						className={cn({ show: speechBubble.portfolio, multiline: true })}
					>
						Other Experience
					</SpeechBubble>
					<MenuItemImage>
						<FcCommandLine />
					</MenuItemImage>
				</MenuItemBlock>
				<MenuItemBlock
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
