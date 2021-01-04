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

const PortfolioModal = ({ info, onClose }) => {
	return (
		<ModalTemplate info={info} onClose={onClose}>
			<MarkUp>
				<Block>
					<h2>About</h2>
					<TextBlock>
						MacOS 컨셉의 포트폴리오 웹사이트
						<ul>
							<li>one page 정적 웹사이트</li>
							<li>반응형 웹사이트 구현</li>
							<li>AOS(Animate On Scroll Library) 사용</li>
						</ul>
					</TextBlock>
				</Block>
				<Block>
					<h2>Development Content</h2>
					<TextBlock>
						<ul>
							<li>반응형 웹사이트 구현을 위한 Media Queries 사용</li>
							<li>styled-components를 이용한 컴포넌트 스타일링</li>
							<li>Card Style List 구현</li>
						</ul>
					</TextBlock>
				</Block>
				<Block>
					<h2>Tech Stack</h2>
					<TextBlock>
						<h3>Front-end</h3>
						<ul>
							<li>react</li>
							<li>styled-component</li>
						</ul>
					</TextBlock>
				</Block>
			</MarkUp>
		</ModalTemplate>
	);
};

export default PortfolioModal;
