import React from 'react';
import ModalTemplate from './ModalTemplate';

import styled from 'styled-components';

const MarkUp = styled.div`
	padding: 20px;
	line-height: 1.5;
`;

const Block = styled.div`
	h2 {
		margin: 5px 0;
	}

	&:not(:first-child) {
		margin-top: 35px;
	}
`;

const TextBlock = styled.div`
	margin-left: 15px;

	ul {
		margin: 5px 0;
		padding: 0 30px;
		li {
			padding: 5px 0;
		}
	}

	a {
		color: #585858;
		text-decoration: underline;
		font-style: italic;
	}
`;

const HighthonModal = ({ info, onClose }) => {
	return (
		<ModalTemplate info={info} onClose={onClose}>
			<MarkUp>
				<Block>
					<h2>About</h2>
					<TextBlock>
						하이톤은 ‘고등학생들이 더 큰 미래를 향해 힘차게 날아오르자' 라는
						의미로 다양한 SW 특성화고 및 마이스터고 학생 운영진들이 직접
						운영하고있으며 SW에 관심있는 학생들이 친근한 분위기에서 함께
						네트워킹하고 상호작용할 수 있는 고등학생 해커톤입니다.
						<ul>
							<li>비슷한 분야를 공부하는 학생들과의 네트워킹과 소중한 경험</li>
							<li>개발 및 디자인 분야에 관심 있는 학생들의 무한한 재능 발휘</li>
							<li>선의의 경쟁을 통한 실력 향상</li>
							<li>학생에 의한, 학생을 위한, 학생의 해커톤</li>
						</ul>
					</TextBlock>
				</Block>
				<Block>
					<h2>Role</h2>
					<TextBlock>
						<ul>
							<li>HIGHTHON 참가 신청 페이지 Front-end 개발</li>
							<li>행사 기획 및 운영</li>
						</ul>
					</TextBlock>
				</Block>
				<Block>
					<h2>Interview & Article</h2>
					<TextBlock>
						<ul>
							<li>
								<a
									href="http://it.chosun.com/site/data/html_dir/2018/02/20/2018022085030.html"
									target="new"
								>
									IT 조선 - 고교생들만의 해커톤 ‘하이톤’...대한민국 IT의 미래를
									엿보다
								</a>
							</li>
						</ul>
					</TextBlock>
				</Block>
			</MarkUp>
		</ModalTemplate>
	);
};

export default HighthonModal;
