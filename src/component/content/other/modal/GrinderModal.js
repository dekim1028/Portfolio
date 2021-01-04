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

const Wrap = styled.div`
	padding: 0 20px;

	&:not(:first-child) {
		margin-top: 20px;
	}

	h3 {
		margin: 0;
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
`;

const GrinderModal = ({ info, onClose }) => {
	return (
		<ModalTemplate info={info} onClose={onClose}>
			<MarkUp>
				<Block>
					<h2>About</h2>
					<TextBlock>
						공부벌레를 위한 스터디 플래너
						<ul>
							<li>공부시간 통계 자료 및 타임테이블 제공</li>
							<li>TODO List 기반의 스터디 플래너</li>
							<li>공부 시간 타이머</li>
							<li>과목 세팅 기능</li>
						</ul>
					</TextBlock>
				</Block>
				<Block>
					<h2>Development Content</h2>
					<TextBlock>
						<ul>
							<li>redux를 통한 상태관리</li>
							<li>redux-saga를 통한 비동기 처리 구현</li>
							<li>REST API 구현 및 호출</li>
							<li>Victory 통계 라이브러리 사용</li>
						</ul>
					</TextBlock>
				</Block>
				<Block>
					<h2>Tech Stack</h2>
					<TextBlock>
						<Wrap>
							<h3>Front-end</h3>
							<ul>
								<li>react</li>
								<li>redux</li>
								<li>redux-saga</li>
								<li>styled-component</li>
							</ul>
						</Wrap>
						<Wrap>
							<h3>Back-end</h3>
							<ul>
								<li>Node.js</li>
								<li>MongoDB</li>
							</ul>
						</Wrap>
						<Wrap>
							<h3>Hosting</h3>
							<ul>
								<li>EC2</li>
								<li>Route 53</li>
								<li>NginX</li>
								<li>pm2</li>
							</ul>
						</Wrap>
					</TextBlock>
				</Block>
			</MarkUp>
		</ModalTemplate>
	);
};

export default GrinderModal;
