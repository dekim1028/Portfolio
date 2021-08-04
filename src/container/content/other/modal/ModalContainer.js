import React from 'react';
import MyLogModal from '../../../../component/content/other/modal/MyLogModal';
import GrinderModal from '../../../../component/content/other/modal/GrinderModal';
import DDModal from '../../../../component/content/other/modal/DDModal';
import PortfolioModal from '../../../../component/content/other/modal/PortfolioModal';
import HighthonModal from '../../../../component/content/other/modal/HighthonModal';
import VolunteerModal from '../../../../component/content/other/modal/VolunteerModal';
import PickMapModal from '../../../../component/content/other/modal/PickMapModal';

const ModalContainer = ({ type, onClose }) => {
	const info = {
		mylog: {
			title: 'MyLog',
			explain: '나만의 크롬 메인화면',
			date: '2020.11 - 2020.12',
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
			date: '2020.10 - 2020.11',
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
			date: '2020.09 - 2020.10',
			github: 'https://github.com/dekim1028/D.D',
			images: ['DD_1.jpg', 'DD_2.jpg', 'DD_3.jpg'],
		},
		portfolio: {
			title: 'Portfolio',
			explain: '포트폴리오 웹사이트',
			date: '2020.12 - 2020.12',
			github: 'https://github.com/dekim1028/Portfolio',
			images: [
				'Portfolio_1.jpg',
				'Portfolio_2.jpg',
				'Portfolio_3.jpg',
				'Portfolio_4.jpg',
			],
		},
		pickmap:{
			title: 'PickMap',
			explain: '네이버 지도 즐겨찾기',
			date: '2021.07 - 진행중',
			github: 'https://github.com/front-side-project/NaverMapClone',
			images: [
				'PickMap_1.png',
				'PickMap_2.png',
			],
		},
		highthon: {
			title: 'HIGHTHON',
			explain: '개발에 관심있는 고등학생을 대상으로 하는 해커톤 운영진',
			date: '2018.01 - 2019.02',
			website: 'https://www.facebook.com/highthon/',
			images: ['Highthon_1.jpg', 'Highthon_2.jpg', 'Highthon_3.jpg'],
		},
		volunteer: {
			title: '청소년 장기 프로젝트',
			explain: '장수사진 촬영 봉사단체 1,2기 운영진',
			date: '2017.01 - 2017.11',
			website: 'https://youthproject2017.modoo.at/',
			images: [
				'Volunteer_1.jpg',
				'Volunteer_2.jpg',
				'Volunteer_3.jpg',
				'Volunteer_4.jpg',
			],
		}
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
		case 'pickmap':
				return <PickMapModal info={info.pickmap} onClose={onClose} />;
		case 'highthon':
			return <HighthonModal info={info.highthon} onClose={onClose} />;
		case 'volunteer':
			return <VolunteerModal info={info.volunteer} onClose={onClose} />;
		default:
			return null;
	}
};

export default ModalContainer;
