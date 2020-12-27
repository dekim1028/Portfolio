import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { IoIosClose } from 'react-icons/io';

const IntroduceBlock = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Wrap = styled.div`
	width: 65vw;
	height: 70vh;
	background: rgba(232, 226, 227, 0.8);
	border-radius: 10px;
	overflow: hidden;
`;

const Header = styled.div`
	width: 100%;
	height: 8%;
	display: flex;
	align-items: center;
	padding: 15px;
	background: #fbf3f5;
`;

const CloseBtn = styled.button`
	width: 14px;
	height: 14px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0;
	border: none;
	border-radius: 10px;
	outline: none;
	background: #df0101;
	cursor: pointer;

	svg {
		font-size: 17px;
		color: #df0101;
	}
	svg:hover {
		color: black;
	}
`;

const Content = styled.div`
	width: 100%;
	height: 92%;
	display: flex;
	background: white;
`;

const LeftMenu = styled.div`
	width: 30%;
	height: 100%;
	padding: 20px;
	border-right: 1px solid #d8d8d8;
`;

const LeftMenuItem = styled.div`
	width: 100%;
	padding: 20px 10px;
	border-radius: 5px;
	font-weight: bold;
	font-size: 15px;

	&.click {
		background: #fee390;
	}
`;

const TextBlock = styled.div`
	width: 70%;
	height: 100%;
	padding: 20px;
	display: none;

	&.show {
		display: block;
	}
`;

const Text = styled.div`
	margin: 20px 0;
	p {
		margin: 5px 0;
		font-size: 15px;

		a {
			color: #848484;
			text-decoration: underline;
		}

		.selectable {
			-ms-user-select: all;
			-moz-user-select: -moz-all;
			-khtml-user-select: all;
			-webkit-user-select: all;
			user-select: all;
		}
	}
`;

const Title = styled.h1`
	margin: 0;
	font-size: 18px;
	color: #2e2e2e;
`;

const Introduce = ({ menu, onClose, onClickMenu }) => {
	return (
		<IntroduceBlock data-aos="zoom-in">
			<Wrap>
				<Header>
					<CloseBtn onClick={onClose}>
						<IoIosClose />
					</CloseBtn>
				</Header>
				<Content>
					<LeftMenu>
						<LeftMenuItem
							id="myinfo"
							className={cn({ click: menu.myinfo })}
							onClick={onClickMenu}
						>
							MyInfo.
						</LeftMenuItem>
						<LeftMenuItem
							id="introduce"
							className={cn({ click: menu.introduce })}
							onClick={onClickMenu}
						>
							Introduce.
						</LeftMenuItem>
					</LeftMenu>
					<TextBlock className={cn({ show: menu.myinfo })}>
						<Text>
							<Title>Contact.</Title>
							<p>
								Email. <b className="selectable">daeun2351@naver.com</b>
							</p>
						</Text>
						<Text>
							<Title>Channel.</Title>
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
						</Text>
						<Text>
							<Title>Education.</Title>
							<p>2016.03 - 2019.01 미림여자정보과학고등학교 뉴미디어솔루션과</p>
						</Text>
					</TextBlock>
					<TextBlock className={cn({ show: menu.introduce })}>
						<Text>
							<Title>Introduce.</Title>
							<p>
								2년 차 개발자로 그룹웨어 웹 서비스를
								기획/개발/배포/운영하였습니다. 풀스택 개발을 담당했으며 필요에
								따라 PL(Project Leader) 역할을 겸하기도 하였습니다. Scouter를
								통해 모니터링을 하고 제품 성능 개선에 기여하였던 경험이
								있습니다.
							</p>
							<p>
								클린 코드를 위해 고민하는것을 좋아합니다. 이를 위해 빠르게
								성장하고 효율적인 코드를 짤 수 있는 역량을 쌓고자
								노력해왔습니다. 또한, 개발자에게 가장 중요한 것은
								커뮤니케이션이라고 생각하기에 다양한 구성원들과 적극적으로
								소통하며 협업해왔습니다.
							</p>
						</Text>
					</TextBlock>
				</Content>
			</Wrap>
		</IntroduceBlock>
	);
};

export default Introduce;
