import React from 'react';
import MyLogModal from '../../../../component/content/other/modal/MyLogModal';
import GrinderModal from '../../../../component/content/other/modal/GrinderModal';
import DDModal from '../../../../component/content/other/modal/GrinderModal';
import PortfolioModal from '../../../../component/content/other/modal/PortfolioModal';

const ModalContainer = ({ type, onClose }) => {
	const info = {
		mylog: {
			title: 'MyLog',
			explain: '나만의 크롬 메인화면',
			github: 'https://github.com/dekim1028/MyLog',
			website: 'https://mylog.link/',
		},
		grinder: {
			title: 'Grinder',
			explain: '공부벌레를 위한 스터디 플래너',
			github: 'https://github.com/dekim1028/Grinder',
			website: 'http://www.grinders.link/',
		},
		dd: {
			title: 'D.D',
			explain: '오늘을 기록하는 블로그형 다이어리',
			github: 'https://github.com/dekim1028/D.D',
		},
		portfolio: {
			title: 'Portfolio',
			explain: 'MacOS 컨셉의 포트폴리오 웹사이트',
			github: 'https://github.com/dekim1028/Portfolio',
		},
	};

	switch (type) {
		case 'mylog':
			return <MyLogModal info={info.mylog} onClose={onClose} />;
		case 'grinder':
			return <GrinderModal info={info.grinder} onClose={onClose} />;
		case 'dd':
			return <DDModal info={info.dd} onClose={onClose} />;
		case 'portfolio':
			return <PortfolioModal info={info.portfolio} onClose={onClose} />;
		default:
			return null;
	}
};

export default ModalContainer;
