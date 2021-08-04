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

const PickMapModal = ({ info, onClose }) => {
	return (
		<ModalTemplate info={info} onClose={onClose}>
			<MarkUp>
				<Block>
					<h2>About</h2>
					<TextBlock>
						네이버 지도를 통한 즐겨찾기 기능 제공
						<ul>
							<li>네이버 지도 및 검색 서비스 제공</li>
							<li>즐겨찾는 장소 저장 [예정]</li>
							<li>장소 공유하기 [예정]</li>
						</ul>
					</TextBlock>
				</Block>
				<Block>
					<h2>Development Content</h2>
					<TextBlock>
						<ul>
							<li>
								Naver Map API, Search API 연동
							</li>
							<li>Jenkins를 이용한 CI/CD 구현</li>
							<li>
								PR 메시지를 통한 스터디원 간의 코드 리뷰
							</li>
						</ul>
					</TextBlock>
				</Block>
				<Block>
					<h2>Tech Stack</h2>
					<TextBlock>
						<h3>Front-end</h3>
						<ul>
							<li>React</li>
							<li>TypeScript</li>
							<li>styled-component</li>
						</ul>
						<h3>Back-end</h3>
						<ul>
							<li>Node.js</li>
						</ul>
						<h3>Hosting</h3>
						<ul>
							<li>EC2</li>
							<li>NginX</li>
						</ul>
						<h3>CI/CD</h3>
						<ul>
							<li>Jenkins</li>
						</ul>
					</TextBlock>
				</Block>
			</MarkUp>
		</ModalTemplate>
	);
};

export default PickMapModal;
