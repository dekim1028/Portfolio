import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';

const ProgressingBlock = styled.div`
	display: none;
	&.show {
		display: block;
	}
`;
const Progressing = ({ show }) => {
	return (
		<ProgressingBlock className={cn({ show })}>progressing</ProgressingBlock>
	);
};

export default Progressing;
