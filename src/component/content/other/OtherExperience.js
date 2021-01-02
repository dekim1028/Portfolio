import React from 'react';
import styled from 'styled-components';
import { imageURL } from '../../../lib/ImageAPI';

const OtherExperienceBlock = styled.div`
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 50px 0;
	background: #3491cc;
	transform: skewY(-5deg);
	box-shadow: 0px 1px 15px #6e6e6e;
`;

const Wrap = styled.div`
	width: 50%;
	height: 100%;
	transform: skewY(5deg);

	@media (max-width: 768px) {
		width: 90%;
	}
`;

const Content = styled.div`
	padding: 40px 0;
`;

const Title = styled.h1`
	margin: 0;
	padding-bottom: 5px;
	border-bottom: 3px solid white;
	color: white;
	text-align: right;
`;

const ExperienceBlock = styled.div`
	width: 100%;
	margin-top: 40px;
`;

const SubTitle = styled.h2`
	margin: 0;
	color: white;
`;

const ProjectBlock = styled.div`
	margin: 0 auto;
	margin-top: 20px;

	&:after {
		content: '';
		display: table;
		clear: both;
	}
`;

const ProjectWrap = styled.div`
	width: 50%;
	padding: 10px;
	float: left;

	@media (max-width: 768px) {
		width: 100%;
		display: block;
		margin-bottom: 20px;
	}
`;

const Project = styled.div`
	position: relative;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	text-align: center;
	background-color: #f1f1f1;

	img {
		width: 100%;
	}
`;

const ProjectCover = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(0, 0, 0, 0.3);
	color: white;
	transition: 0.5s;

	h3,
	h4 {
		margin: 10px 0;
	}

	h4 {
		visibility: hidden;
	}

	&:hover {
		background: rgba(0, 0, 0, 0.6);
		h4 {
			visibility: visible;
		}
	}
`;

const OtherExperience = ({ onClick }) => {
	return (
		<OtherExperienceBlock id="other_exp">
			<Wrap>
				<Content data-aos="fade-left">
					<Title>Other Experience</Title>
					<ExperienceBlock>
						<SubTitle>Side Project.</SubTitle>
						<ProjectBlock>
							<ProjectWrap>
								<Project>
									<img
										src={`${imageURL}/content/portfolio/mylog.png`}
										alt="mylog"
									/>
									<ProjectCover onClick={() => onClick('mylog')}>
										<div>
											<h3>MyLog</h3>
											<h4>나만의 크롬 메인 화면</h4>
										</div>
									</ProjectCover>
								</Project>
							</ProjectWrap>
							<ProjectWrap>
								<Project>
									<img
										src={`${imageURL}/content/portfolio/grinder.png`}
										alt="grinder"
									/>
									<ProjectCover onClick={() => onClick('grinder')}>
										<div>
											<h3>Grinder</h3>
											<h4>공부벌레를 위한 스터디 플래너</h4>
										</div>
									</ProjectCover>
								</Project>
							</ProjectWrap>
							<ProjectWrap>
								<Project>
									<img
										src={`${imageURL}/content/portfolio/D.D.png`}
										alt="D.D"
									/>
									<ProjectCover onClick={() => onClick('dd')}>
										<div>
											<h3>D.D</h3>
											<h4>오늘을 기록하는 블로그형 다이어리</h4>
										</div>
									</ProjectCover>
								</Project>
							</ProjectWrap>
							<ProjectWrap>
								<Project>
									<img
										src={`${imageURL}/content/portfolio/portfolio.jpg`}
										alt="portfolio"
									/>
									<ProjectCover onClick={() => onClick('portfolio')}>
										<div>
											<h3>Portfolio</h3>
											<h4>포트폴리오 웹사이트</h4>
										</div>
									</ProjectCover>
								</Project>
							</ProjectWrap>
						</ProjectBlock>
					</ExperienceBlock>
					<ExperienceBlock>
						<SubTitle>Etc.</SubTitle>
						<ProjectBlock>
							<ProjectWrap>
								<Project>
									<img
										src={`${imageURL}/content/portfolio/highthon.jpg`}
										alt="highthon"
									/>
									<ProjectCover onClick={() => onClick('highthon')}>
										<div>
											<h3>HIGHTHON</h3>
											<h4>고등학생 해커톤 운영진</h4>
										</div>
									</ProjectCover>
								</Project>
							</ProjectWrap>
							<ProjectWrap>
								<Project>
									<img
										src={`${imageURL}/content/portfolio/volunteer.jpg`}
										alt="volunteer"
									/>
									<ProjectCover onClick={() => onClick('volunteer')}>
										<div>
											<h3>청소년 장기 프로젝트</h3>
											<h4>장수사진 촬영 봉사단체 운영진</h4>
										</div>
									</ProjectCover>
								</Project>
							</ProjectWrap>
						</ProjectBlock>
					</ExperienceBlock>
				</Content>
			</Wrap>
		</OtherExperienceBlock>
	);
};

export default OtherExperience;
