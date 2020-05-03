import React from 'react';
import './list.css';

export default function List(props) {
	const { title, children } = props;

	return (
		<div className="list">
			<div className="list-title">{title}</div>
			{children}
		</div>
	);
}
