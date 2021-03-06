import React from 'react';
import styled from 'styled-components';
import { imageURL } from '../../lib/ImageAPI';

const MainBlock = styled.div`
	background-size: cover;
	background-repeat: no-repeat;
`;

const ProfileBlock = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ProfileImageBox = styled.div`
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

const Main = () => {
	return (
		<MainBlock
			style={{ backgroundImage: `url('${imageURL}/common/background.png')` }}
		>
			<ProfileBlock>
				<div data-aos="fade-up">
					<ProfileImageBox>
						<ProfileImage src={`${imageURL}/common/profile.jpeg`} />
					</ProfileImageBox>
					<Text>Front-End Developer</Text>
					<Text>Daeun Kim</Text>
				</div>
			</ProfileBlock>
		</MainBlock>
	);
};

export default Main;
