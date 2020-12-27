import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';

const SoftBlock = styled.div`
	display: none;
	&.show {
		display: block;
	}
`;

const Soft = ({ show }) => {
	return <SoftBlock className={cn({ show })}>soft</SoftBlock>;
};

export default Soft;
