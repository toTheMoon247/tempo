import React, { Fragment } from 'react';
import Card from './card';
import '../styles/dashboard.scss';

const Dashboard = (props) => {

	return(
		<div id="page__dashboard">
			<h1>Dashboard</h1>
			<p>overview</p>
			<div class="card-container">
				<Card />
				<Card />	
			</div>

			
		</div>
	);
}

export default Dashboard;

