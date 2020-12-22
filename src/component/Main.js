import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import { CgPushChevronDown } from 'react-icons/cg';
import 'aos/dist/aos.css';

const MainBlock = styled.div`
	min-width: 100vw;
	min-height: 100vh;
	background-image: url('/image/common/background.png');
	background-size: 100% 100%;
	background-repeat: no-repeat;
`;

const Wrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 30vh;
`;

const ProfileBlock = styled.div``;

const Profile = styled.div`
	width: 200px;
	height: 200px;
	margin: 0 auto;
	border: 5px solid white;
	border-radius: 100px;
	overflow: hidden;
`;

const ProfileImage = styled.img`
	width: 100%;
	height: 100%;
`;

const Text = styled.h1`
	margin: 20px;
	text-align: center;
	font-size: 20px;
	color: white;
`;

const DownBtn = styled(CgPushChevronDown)`
	position: fixed;
	left: 0;
	right: 0;
	bottom: 20px;
	margin: 0 auto;
	color: rgba(255, 255, 255, 0.5);
	font-size: 35px;

	@keyframes move {
		0% {
			bottom: 20px;
		}
		25% {
			bottom: 18px;
		}
		50% {
			bottom: 15px;
		}
		75% {
			bottom: 12px;
		}
		100% {
			bottom: 10px;
		}
	}

	animation-name: move;
	animation-duration: 0.5s;
	animation-iteration-count: infinite;
	animation-direction: alternate;
	animation-fill-mode: forwards;
`;

const Main = () => {
	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);

	return (
		<MainBlock>
			<Wrap>
				<ProfileBlock data-aos="fade-up">
					<Profile>
						<ProfileImage src="/image/common/profile.jpeg" />
					</Profile>
					<Text>Front-End Developer</Text>
					<Text>Daeun Kim</Text>
				</ProfileBlock>
			</Wrap>
			<DownBtn />
		</MainBlock>
	);
};

export default Main;
