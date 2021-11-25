import axios from 'axios';

const getCardDataOne = async () => {
	// todo: export hardcoded url, use library dotenv
	
	// call the backend
	try {
		const res = await axios.get(`http://localhost:3001/dashboard`);
		console.log(res.data);
		return res
	} catch (err) {
		console.log("An error occured...", err);
	}
}


const getCardData = () => {
	return [
		{
			subtitle: "Marketing",
			total: 2500 
		},
		{
			subtitle: "Operations",
			total: 1500 
		},
		{
			subtitle: "Purchasing",
			total: 500 
		},
		{
			subtitle: "Other",
			total: 150 
		},
	]
};

const getGraphData = "TODO"

export { getCardData, getCardDataOne, getGraphData };