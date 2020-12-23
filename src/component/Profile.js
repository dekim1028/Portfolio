import React from 'react';
import styled from 'styled-components';

const ProfileBlock = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 30vh;
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

const Profile = () => {
	return (
		<ProfileBlock>
			<div data-aos="fade-up">
				<ProfileImageBox>
					<ProfileImage src="/image/common/profile.jpeg" />
				</ProfileImageBox>
				<Text>Front-End Developer</Text>
				<Text>Daeun Kim</Text>
			</div>
		</ProfileBlock>
	);
};

export default Profile;
