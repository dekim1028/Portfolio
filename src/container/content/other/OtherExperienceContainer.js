import React, { useState } from 'react';
import OtherExperience from '../../../component/content/other/OtherExperience';
import ModalContainer from './modal/ModalContainer';

const OtherExperienceContainer = () => {
	const [type, setType] = useState('');

	const onClick = (id) => {
		setType(id);
	};

	const onClose = () => {
		setType('');
	};

	return (
		<>
			<OtherExperience onClick={onClick} />
			<ModalContainer type={type} onClose={onClose} />
		</>
	);
};

export default OtherExperienceContainer;
