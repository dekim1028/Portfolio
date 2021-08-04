import React from 'react';
import styled from 'styled-components';
import { imageURL } from '../../../lib/ImageAPI';

const IntroduceBlock = styled.div`
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 70px 0;
	background: #fafafa;
`;

const Content = styled.div`
	width: 50%;
	height: 100%;

	@media (max-width: 768px) {
		width: 90%;
	}
`;

const Title = styled.h1`
	margin: 0;
	padding-bottom: 5px;
	border-bottom: 3px solid rgb(217, 115, 13);
	color: rgb(217, 115, 13);
	text-align: left;
`;

const BasicInfo = styled.div`
	display: flex;
	align-items: center;
	padding: 50px 0;
	border-bottom: 1px solid #d8d8d8;
	img {
		width: 200px;
		margin-right: 20px;
	}

	@media (max-width: 768px) {
		display: block;
	}
`;

const TextBlock = styled.div`
	margin: 20px 0;
	p {
		margin: 10px 0;
		line-height: 1.6;
	}
	a {
		color: #6e6e6e;
		text-decoration: underline;
	}
`;

const SubTitle = styled.h2`
	margin: 0;
`;

const AboutMe = styled.div`
	padding: 30px 0;
`;

const Introduce = () => {
	return (
		<IntroduceBlock id="introduce">
			<Content data-aos="fade-right">
				<Title>Introduce</Title>
				<BasicInfo>
					<img src={`${imageURL}/common/profile.jpeg`} alt="profile" />
					<div>
						<TextBlock>
							<SubTitle>Contact.</SubTitle>
							<p>
								Phone. <b className="selectable">010-0000-0000</b>
							</p>
							<p>
								Email. <b className="selectable">daeun2351@naver.com</b>
							</p>
						</TextBlock>
						<TextBlock>
							<SubTitle>Channel.</SubTitle>
							<p>
								Blog.&nbsp;
								<a href="https://bunny-loves-carrot.tistory.com/" target="new">
									https://bunny-loves-carrot.tistory.com/
								</a>
							</p>
							<p>
								GitHub.&nbsp;
								<a href="https://github.com/dekim1028" target="new">
									https://github.com/dekim1028
								</a>
							</p>
						</TextBlock>
					</div>
				</BasicInfo>
				<AboutMe>
					<TextBlock>
						<SubTitle>About Me.</SubTitle>
						<p>
							새로운 것을 배우고 구성원들과 함께 성장하는 것을 좋아합니다.<br/>
							이를 위해 다양한 사람들과 소통하며 효율적인 코드를 짤 수 있는 역량을 쌓고자 노력해왔습니다.<br/>
							팀원들과 함께 노력하며 좋은 시너지를 낼 수 있는 개발자가 되고싶습니다.
						</p>
						<br/>
						<p>
							- React Native 기반의 글로벌 쇼핑 어플에 Front-end 포지션으로 참여하여 쇼핑에 필요한 주요 기능 개발<br/>
							- Spring 기반의 그룹웨어 웹 솔루션 개발/운영 경험 및 상황에 따른 PL 역할 수행<br/>
							- 다양한 언어 사용 경험, 모니터링 및 장애 이슈 대응 경험
						</p>
					</TextBlock>
				</AboutMe>
			</Content>
		</IntroduceBlock>
	);
};

export default Introduce;
