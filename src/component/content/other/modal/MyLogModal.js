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

	h3 {
		margin: 0;
	}

	ul {
		margin: 5px 0;
		padding: 0 30px;
		li {
			padding: 5px 0;
		}
	}
`;

const MyLogModal = ({ info, onClose }) => {
	return (
		<ModalTemplate info={info} onClose={onClose}>
			<MarkUp>
				<Block>
					<h2>About</h2>
					<TextBlock>
						내 마음대로 커스텀하는 시작 페이지, 다양한 설정 기능 제공
						<ul>
							<li>여러 색상의 배경화면</li>
							<li>검색 툴 지정 (Naver, Google)</li>
							<li>간편한 위젯과 테마 / Drag & Drop 이동, 리사이징 기능</li>
							<li>바로가기(MyLog) 설정</li>
						</ul>
					</TextBlock>
				</Block>
				<Block>
					<h2>Tech Stack</h2>
					<TextBlock>
						<h3>Front-end</h3>
						<ul>
							<li>react</li>
							<li>redux</li>
							<li>styled-component</li>
						</ul>
					</TextBlock>
				</Block>
			</MarkUp>
		</ModalTemplate>
	);
};

export default MyLogModal;
