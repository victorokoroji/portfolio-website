import React from 'react';
import { SocialIcon } from 'react-social-icons';

const SocialIcons = ({ icon, className, height, width, fgColor, bgColor }) => {
	return (
		<div>
			<SocialIcon
				className={className}
				url={icon}
				fgColor={fgColor}
				bgColor={bgColor}
				style={{ height: height , width:  width  }}
			/>
		</div>
	);
};

export default SocialIcons;
