import React from 'react';
import styled from 'styled-components';
import {
	AiOutlineCloseCircle,
	AiFillGithub,
	AiOutlineLink,
	AiOutlineCalendar,
} from 'react-icons/ai';
import Slideshow from './Slideshow';

const ModalTemplateBlock = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.4);
	z-index: 999;
`;

const CloseBtn = styled(AiOutlineCloseCircle)`
	position: relative;
	left: 100%;
	font-size: 25px;
	color: white;

	&:hover {
		color: black;
	}

	@media (max-width: 768px) {
		top: -20px;
		left: 50%;
		transform: translateX(-50%);
		font-size: 30px;
	}
`;

const ModalTemplateWrap = styled.div`
	width: 70%;
	position: absolute;
	top: 10%;
	bottom: 0;

	@media (max-width: 768px) {
		width: 100%;
	}
`;

const ModalBlock = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 3%;
	bottom: 0px;
	padding: 25px;
	background-color: white;
	border-radius: 15px 15px 0 0;
	box-shadow: 5px 5px 10px black;
`;

const Header = styled.div`
	padding-bottom: 15px;
	border-bottom: 1px solid;
`;

const Title = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 30px;
	font-weight: bold;
`;

const DateBlock = styled.div`
	display: flex;
	align-items: center;
	font-size: 13px;
	font-weight: normal;
	svg {
		margin-right: 5px;
		font-size: 20px;
	}
`;

const Explain = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-top: 10px;
	color: grey;
	font-size: 17px;
	font-weight: 500;
`;

const LinkBlock = styled.div`
	display: flex;
	align-items: center;
	color: black;
`;

const Link = styled.a`
	display: block;
	font-size: 25px;
	margin: 0 2px;

	&:hover {
		color: grey;
	}
`;

const Content = styled.div`
	height: 70vh;
	margin: 20px 0;
	overflow-y: auto;

	@media (max-width: 768px) {
		height: 63vh;
	}
`;

const ModalTemplate = ({ info, onClose, children }) => {
	if (!info) return null;
	return (
		<ModalTemplateBlock>
			<ModalTemplateWrap>
				<CloseBtn onClick={onClose} />
				<ModalBlock>
					<Header>
						<Title>
							{info.title}
							<DateBlock>
								<AiOutlineCalendar />
								<div>{info.date}</div>
							</DateBlock>
						</Title>
						<Explain>
							{info.explain}
							<LinkBlock>
								{info.github && (
									<Link href={info.github} target="new">
										<AiFillGithub />
									</Link>
								)}
								{info.website && (
									<Link href={info.website} target="new">
										<AiOutlineLink />
									</Link>
								)}
							</LinkBlock>
						</Explain>
					</Header>
					<Content>
						<div>
							<Slideshow images={info.images} />
							{children}
						</div>
					</Content>
				</ModalBlock>
			</ModalTemplateWrap>
		</ModalTemplateBlock>
	);
};

export default ModalTemplate;
