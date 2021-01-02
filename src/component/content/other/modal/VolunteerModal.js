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

const VolunteerModal = ({ info, onClose }) => {
	return (
		<ModalTemplate info={info} onClose={onClose}>
			<MarkUp>
				<Block>
					<h2>About</h2>
					<TextBlock>
						전국각지의 청소년들만으로 구성된 청소년 사진 봉사 단체로서,
						청소년들이 직접 온라인과 오프라인을 통해 장수사진 촬영에 필요한
						비용을 모금 받고, 모금 받은 금액을 통해 장수사진이 필요한 어르신
						분들께 아름다운 사진을 찍어드리는 전국 청소년 사진 봉사단체입니다.
						<ul>
							<li>
								각자의 삶을 살아가기 바쁜 이 시대의 사람들에게 진정한 봉사의
								의미를 전달
							</li>
							<li>
								우리나라 청소년들에게 기부의 소중함과 따뜻함을 느끼게 해주고
								싶다는 취지로 시작
							</li>
							<li>
								우리나라의 성장을 위해 애쓰셨던 어르신 분들께 감사의 마음을 표시
							</li>
							<li>다큐멘터리 제작과 기사 배포 활동</li>
						</ul>
					</TextBlock>
				</Block>
				<Block>
					<h2>Role</h2>
					<TextBlock>
						<ul>
							<li>프로젝트 기획보조 및 촬영 시나리오 작성</li>
							<li>후원금 관리 및 모금활동 기획</li>
							<li>장수사진 촬영 봉사활동 참가</li>
						</ul>
					</TextBlock>
				</Block>
				<Block>
					<h2>Interview & Article</h2>
					<TextBlock>
						<ul>
							<li>
								<a
									href="http://www.ohmynews.com/NWS_Web/View/at_pg.aspx?CNTN_CD=A0002301031"
									target="new"
								>
									오마이뉴스 - 영정사진 찍는 10대들, "요양원 80%가 거절했어요"
								</a>
							</li>
							<li>
								<a
									href="http://www.ohmynews.com/NWS_Web/View/at_pg.aspx?CNTN_CD=A0002327784"
									target="new"
								>
									오마이뉴스 - "어르신들, 저희가 장수사진 찍어드릴게요"
								</a>
							</li>
							<li>
								<a href="http://www.onday.or.kr/wp/?p=13367" target="new">
									따뜻한 하루 - 아름다운 마지막 순간을 선물
								</a>
							</li>
							<li>
								<a
									href="https://blog.naver.com/wco_seoul/221056702546"
									target="new"
								>
									컬쳐 디자이너 - 기특한 10대 아닌, 참된 봉사 의미 전하는
									‘청소년장기프로젝트’
								</a>
							</li>
						</ul>
					</TextBlock>
				</Block>
			</MarkUp>
		</ModalTemplate>
	);
};

export default VolunteerModal;
