import React from 'react';

const Input = ({ type, placeholder, className}) => {
	return (
		<div>
			<input
			
				type={type}
				placeholder={placeholder}
				className={className}
				required
			/>{' '}
			<br />
		</div>
	);
};

export default Input;
