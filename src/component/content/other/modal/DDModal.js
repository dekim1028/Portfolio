import React from 'react';
import ModalTemplate from './ModalTemplate';

import styled from 'styled-components';

const MarkUp = styled.div`
	padding: 20px;
	line-height: 1.5;

	h2 {
		margin: 5px 0;
	}

	h3 {
		margin: 0;
	}

	p {
		margin: 0;
		margin-left: 15px;
	}

	ul {
		margin: 5px 0;
		padding: 0 30px;
		li {
			padding: 5px 0;
		}
	}
`;

const Block = styled.div`
	&:not(:first-child) {
		margin-top: 35px;
	}
`;

const Wrap = styled.div`
	padding: 0 20px;
	&:not(:first-child) {
		margin-top: 20px;
	}
`;

const TextBlock = styled.div`
	margin-left: 15px;
`;

const DDModal = ({ info, onClose }) => {
	return (
		<ModalTemplate info={info} onClose={onClose}>
			<MarkUp>
				<Block>
					<h2>About</h2>
					<TextBlock>
						나의 오늘을 기록하고 어제를 추억하는 블로그형 다이어리
						<ul>
							<li>일기 작성/수정/삭제/조회 기능</li>
							<li>토큰 기반 인증 시스템</li>
							<li>태그 추가 기능</li>
							<li>리스트 페이지네이션</li>
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
					</TextBlock>
				</Block>
			</MarkUp>
		</ModalTemplate>
	);
};

export default DDModal;
