import React, { useEffect, useState } from 'react';
import Introduce from '../../../component/content/introduce/Introduce';
import { withRouter } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const IntroduceContainer = ({ history }) => {
	const [menu, setMenu] = useState({
		myinfo: true,
		introduce: false,
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

	useEffect(() => {
		AOS.init({
			duration: 1000,
		});
	}, []);

	return <Introduce menu={menu} onClose={onClose} onClickMenu={onClickMenu} />;
};

export default withRouter(IntroduceContainer);
