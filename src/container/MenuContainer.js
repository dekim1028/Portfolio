import React, { useState } from 'react';
import Menu from '../component/Menu';

const MenuContainer = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [speechBubble, setSpeechBubble] = useState({
		myInfo: false,
		career: false,
		stack: false,
		portfolio: false,
		contact: false,
	});

	const onShowMenu = () => {
		setShowMenu(!showMenu);
	};

	const onShowSpeechBubble = (id) => {
		setSpeechBubble({
			...speechBubble,
			[id]: true,
		});
	};

	const onHideSpeechBubble = (id) => {
		setSpeechBubble({
			...speechBubble,
			[id]: false,
		});
	};

	return (
		<Menu
			showMenu={showMenu}
			speechBubble={speechBubble}
			onShowMenu={onShowMenu}
			onShowSpeechBubble={onShowSpeechBubble}
			onHideSpeechBubble={onHideSpeechBubble}
		/>
	);
};

export default MenuContainer;
