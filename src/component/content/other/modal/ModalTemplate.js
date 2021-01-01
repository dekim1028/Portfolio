import React from 'react';
import styled from 'styled-components';
import {
	AiOutlineCloseCircle,
	AiFillGithub,
	AiOutlineLink,
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
`;

const ModalTemplateWrap = styled.div`
	width: 70%;
	height: 90%;
`;

const ModalBlock = styled.div`
	width: 100%;
	height: 100%;
	padding: 25px;
	background-color: white;
	border-radius: 15px;
	box-shadow: 5px 5px 10px black;
`;

const Title = styled.h1`
	margin: 0;
`;

const Explain = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px 0;
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
	height: 85%;
	overflow-y: auto;
`;

const ModalTemplate = ({ info, onClose, children }) => {
	if (!info) return null;
	return (
		<ModalTemplateBlock>
			<ModalTemplateWrap>
				<CloseBtn onClick={onClose} />
				<ModalBlock>
					<Title>{info.title}</Title>
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
					<Content>
						<Slideshow images={info.images} />
						{children}
					</Content>
				</ModalBlock>
			</ModalTemplateWrap>
		</ModalTemplateBlock>
	);
};

export default ModalTemplate;
