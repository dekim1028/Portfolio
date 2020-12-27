import React from 'react';
import styled from 'styled-components';

const IntroduceBlock = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 50px 0;
	background: #fafafa;
`;

const Content = styled.div`
	width: 45%;
	height: 100%;
`;

const Title = styled.h1`
	width: fit-content;
	margin: 0;
	border-bottom: 3px solid rgb(217, 115, 13);
	color: rgb(217, 115, 13);
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
`;

const TextBlock = styled.div`
	margin: 20px 0;
	p {
		margin: 10px 0;
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
				<Title>Introduce.</Title>
				<BasicInfo>
					<img src="/image/common/profile.jpeg" alt="profile" />
					<div>
						<TextBlock>
							<SubTitle>Contact.</SubTitle>
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
							2년 차 개발자로 그룹웨어 웹 서비스를
							기획/개발/배포/운영하였습니다. 풀스택 개발을 담당했으며 필요에
							따라 PL(Project Leader) 역할을 겸하기도 하였습니다. Scouter를 통해
							모니터링을 하고 제품 성능 개선에 기여하였던 경험이 있습니다.
						</p>
						<p>
							클린 코드를 위해 고민하는것을 좋아합니다. 이를 위해 빠르게
							성장하고 효율적인 코드를 짤 수 있는 역량을 쌓고자 노력해왔습니다.
							또한, 개발자에게 가장 중요한 것은 커뮤니케이션이라고 생각하기에
							다양한 구성원들과 적극적으로 소통하며 협업해왔습니다.
						</p>
					</TextBlock>
				</AboutMe>
			</Content>
		</IntroduceBlock>
	);
};

export default Introduce;
