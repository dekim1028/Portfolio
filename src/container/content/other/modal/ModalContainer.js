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
			images: [
				'MyLog_1.jpg',
				'MyLog_2.jpg',
				'MyLog_3.jpg',
				'MyLog_4.jpg',
				'MyLog_5.jpg',
				'MyLog_6.jpg',
			],
		},
		grinder: {
			title: 'Grinder',
			explain: '공부벌레를 위한 스터디 플래너',
			github: 'https://github.com/dekim1028/Grinder',
			website: 'http://www.grinders.link/',
			images: [
				'Grinder_1.jpg',
				'Grinder_2.jpg',
				'Grinder_3.jpg',
				'Grinder_4.jpg',
			],
		},
		dd: {
			title: 'D.D',
			explain: '오늘을 기록하는 블로그형 다이어리',
			github: 'https://github.com/dekim1028/D.D',
			images: ['DD_1.jpg', 'DD_2.jpg', 'DD_3.jpg'],
		},
		portfolio: {
			title: 'Portfolio',
			explain: 'MacOS 컨셉의 포트폴리오 웹사이트',
			github: 'https://github.com/dekim1028/Portfolio',
			images: [
				'Portfolio_1.jpg',
				'Portfolio_2.jpg',
				'Portfolio_3.jpg',
				'Portfolio_4.jpg',
			],
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
