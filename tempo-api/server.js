const express = require('express');
const middleware = require('./middleware');

const dashboardData = [
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

// start api server
const app = express();
app.use(middleware);

// set a route
app.get("/dashboard", (req, res) => {
	res.status(200).json(dashboardData)
});


app.listen(3001, () => {
	console.log("Tempo server running on port 3001...");
});