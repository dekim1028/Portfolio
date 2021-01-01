import React from 'react';
import ModalTemplate from './ModalTemplate';

const PortfolioModal = ({ info, onClose }) => {
	return <ModalTemplate info={info} onClose={onClose}></ModalTemplate>;
};

export default PortfolioModal;
