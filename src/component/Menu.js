import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { CgPushChevronDown } from 'react-icons/cg';

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
	width: 90%;
	height: 90px;
	margin: 0 auto;
	background: rgba(255, 255, 255, 0.3);
	border-radius: 25px;
	padding: 10px;
`;

const MenuItemBlock = styled.div`
	display: inline-block;
`;

const MenuItemImage = styled.img``;

const MenuItemText = styled.h1`
	margin: 0;
`;

const Menu = ({ showMenu, onShowMenu }) => {
	return (
		<MenuBlock className={cn({ showMenu })}>
			<DownBtn className={cn({ showMenu })} onClick={onShowMenu} />
			<MenuList>
				<MenuItemBlock>
					<MenuItemImage />
					<MenuItemText></MenuItemText>
				</MenuItemBlock>
			</MenuList>
		</MenuBlock>
	);
};

export default Menu;
