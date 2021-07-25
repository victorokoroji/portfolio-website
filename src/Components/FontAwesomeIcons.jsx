import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FontAwesomeIcons = ({ icon, size, className }) => {
	return (
		<div>
			<FontAwesomeIcon icon={icon} size={size} className={className} />
		</div>
	);
};

export default FontAwesomeIcons;
