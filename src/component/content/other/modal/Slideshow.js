import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styled from 'styled-components';
import { imageURL } from '../../../../lib/ImageAPI';

const SlideshowBlock = styled.div`
	.each-slide > div {
		height: 350px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;

		@media (max-width: 768px) {
			height: 200px;
		}
	}
`;

const Slideshow = ({ images }) => {
	if (!images) return null;
	return (
		<SlideshowBlock>
			<Slide easing="ease">
				{images.length > 0 &&
					images.map((image, i) => (
						<div className="each-slide" key={image}>
							<div
								style={{
									backgroundImage: `url(${imageURL}/content/portfolio/slide/${image})`,
								}}
							/>
						</div>
					))}
			</Slide>
		</SlideshowBlock>
	);
};

export default Slideshow;
