import React, { useState } from 'react';
import Skill from '../../../component/content/skill/Skill';
import { withRouter } from 'react-router-dom';

const SkillContainer = ({ history }) => {
	const [menu, setMenu] = useState({
		hard: false,
		soft: false,
		tried: false,
	});

	const onMouseOverMenu = (e) => {
		const { id } = e.target;

		let updateMenu = {};
		for (let key in menu) {
			if (key === id) {
				updateMenu = {
					...updateMenu,
					[key]: true,
				};
			} else {
				updateMenu = {
					...updateMenu,
					[key]: false,
				};
			}
		}

		setMenu(updateMenu);
	};

	const onMouseOutMenu = (e) => {
		const { id } = e.target;
		setMenu({
			...menu,
			[id]: false,
		});
	};

	return (
		<Skill
			menu={menu}
			onMouseOverMenu={onMouseOverMenu}
			onMouseOutMenu={onMouseOutMenu}
		/>
	);
};

export default withRouter(SkillContainer);
