import React from 'react';

const Title = props => {
	return (
		<div className={Title}>
			<h1>{props.title}</h1>
			<h2>Liczba zadań: {props.number}</h2>
		</div>
	);
}

export default Title;