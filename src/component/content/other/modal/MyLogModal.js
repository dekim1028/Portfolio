import React from 'react';
import ModalTemplate from './ModalTemplate';

const MyLogModal = ({ info, onClose }) => {
	return <ModalTemplate info={info} onClose={onClose}></ModalTemplate>;
};

export default MyLogModal;
