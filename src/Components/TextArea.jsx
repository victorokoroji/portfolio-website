import React from 'react';

const TextArea = ({text, className}) => {
	return <textarea defaultValue={text} className={className}></textarea>;
};

export default TextArea;
