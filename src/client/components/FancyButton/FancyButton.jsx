import React from 'react';
import './styles.css';

const HeaderLink = (props) => {
	const {
		type = 'button',
		gradient = 'blueGradient',
		children, action, text,
	} = props;
	return (
		// eslint-disable-next-line react/button-has-type
		<button className={gradient} type={type} onClick={action} onKeyDown={action}>
			{text}{children}
		</button>
	);
};

export default HeaderLink;
