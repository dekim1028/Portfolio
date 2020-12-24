import React, { useState } from 'react';
import Menu from '../component/Menu';

const MenuContainer = () => {
	const [showMenu, setShowMenu] = useState(false);

	const onShowMenu = () => {
		setShowMenu(!showMenu);
	};

	return <Menu showMenu={showMenu} onShowMenu={onShowMenu} />;
};

export default MenuContainer;
