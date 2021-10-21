import React, { useEffect, useState } from 'react';
import Card from './card';
import '../styles/dashboard.scss';
import { getCardData } from '../services/dashboardService'; 

const Dashboard = (props) => {

	// state = {
	// 	cardListData: [] // setCardListData
	// };

	const [cardListData, setCardListData] = useState([]);

	// new syntax for componentDidMount ---> Please read
	// passing [] will make it to run once
	useEffect( () => {
		const cardListData = getCardData();
		setCardListData(cardListData);
	}, []);

	return(
		<div id="page__dashboard" className="container bg-light">
			<h1>Dashboard</h1>
			<p>overview</p>
			<div class="card-container">
				{cardListData.map( cardData => <Card {...cardData}/>)}
			</div>
		</div>
	);
}

export default Dashboard;

