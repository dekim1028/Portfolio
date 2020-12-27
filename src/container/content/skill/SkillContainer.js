import React, { useState } from 'react';
import Skill from '../../../component/content/skill/Skill';
import { withRouter } from 'react-router-dom';

const SkillContainer = ({ history }) => {
	const [menu, setMenu] = useState({
		hard: {
			click: true,
			hover: false,
		},
		soft: {
			click: false,
			hover: false,
		},
		progressing: {
			click: false,
			hover: false,
		},
	});

	const onClose = () => {
		history.push('/');
	};

	const onClickMenu = (e) => {
		const { id } = e.target;

		let updateMenu = {};
		for (let key in menu) {
			if (key === id) {
				updateMenu = {
					...updateMenu,
					[key]: {
						...menu[key],
						click: true,
					},
				};
			} else {
				updateMenu = {
					...updateMenu,
					[key]: {
						...menu[key],
						click: false,
					},
				};
			}
		}

		setMenu(updateMenu);
	};

	const onHoverMenu = (e) => {
		const { id } = e.target;

		let updateMenu = {};
		for (let key in menu) {
			if (key === id) {
				updateMenu = {
					...updateMenu,
					[key]: {
						...menu[key],
						hover: true,
					},
				};
			} else {
				updateMenu = {
					...updateMenu,
					[key]: {
						...menu[key],
						hover: false,
					},
				};
			}
		}

		setMenu(updateMenu);
	};

	const onOutMenu = (e) => {
		const { id } = e.target;
		setMenu({
			...menu,
			[id]: {
				...menu[id],
				hover: false,
			},
		});
	};

	return (
		<Skill
			menu={menu}
			onClose={onClose}
			onClickMenu={onClickMenu}
			onHoverMenu={onHoverMenu}
			onOutMenu={onOutMenu}
		/>
	);
};

export default withRouter(SkillContainer);
