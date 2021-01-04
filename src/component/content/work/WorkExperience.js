import React from 'react';
import styled from 'styled-components';

const WorkExperienceBlock = styled.div`
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 50px 0;
	background: #fb5c44;
	transform: skewY(5deg);
	box-shadow: 0px 1px 15px #6e6e6e;
`;

const Wrap = styled.div`
	width: 50%;
	height: 100%;
	transform: skewY(-5deg);

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
	text-align: left;
`;

const ExperienceBlock = styled.div`
	margin: 40px 0;

	.explain {
		color: white;
	}
`;

const SubTitle = styled.a`
	padding: 3px 0;
	border-bottom: 1px solid white;
	color: white;
	font-size: 20px;
	font-weight: bold;
`;

const WorkExplainBlock = styled.div`
	display: flex;
	align-items: center;

	.info {
		width: 30%;
		color: white;

		h3 {
			margin: 0;
		}
	}
`;

const WorkList = styled.ul`
	width: 70%;
	margin: 0;
	color: white;
`;

const WorkListItem = styled.li`
	margin: 10px 0;
	line-height: 1.5;
`;

const WorkExperience = () => {
	return (
		<WorkExperienceBlock id="work_exp">
			<Wrap>
				<Content data-aos="fade-right">
					<Title>Work Experience</Title>
					<ExperienceBlock>
						<SubTitle
							href="https://www.covision.co.kr/main/index.asp"
							target="new"
						>
							코비젼
						</SubTitle>
						<p className="explain">
							국내 최대 대기업 레퍼런스를 보유하고 있는 그룹웨어 솔루션 전문
							기업
						</p>
						<WorkExplainBlock>
							<div className="info">
								<h3>Full Stack Developer</h3>
								<p>2018.11 ~ 2020.03</p>
							</div>
							<WorkList>
								<WorkListItem>
									JSP, Spring 등을 사용하여 그룹웨어 솔루션 개발
								</WorkListItem>
								<WorkListItem>
									고객사에 맞는 customizing형 그룹웨어 개발/배포/운영
									<br />
									(오뚜기, 부영그룹, 인탑스, SM하이플러스 등)
								</WorkListItem>
								<WorkListItem>
									ERP, HR, 메산저, 통합검색 등의 3rd Party 연동 기능 개발
								</WorkListItem>
							</WorkList>
						</WorkExplainBlock>
					</ExperienceBlock>
				</Content>
			</Wrap>
		</WorkExperienceBlock>
	);
};

export default WorkExperience;
