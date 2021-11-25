import React, { Fragment } from 'react';
import '../styles/card.scss';

const Card = (props) => {

	return(
		<div className="tempo-card bg-white">
			<i className="far fa-address-card fa-2x"></i>
			<p className="tempo-card__subtitle">{props.subtitle}</p>
			<p className="tempo-card__total">{props.total}</p>
		</div>
	);
}

export default Card;