const express = require("express");
const path = require('path');
const axios = require("axios");
const app = express();

const DEFAULT_URL = 'https://api.exchangeratesapi.io/latest';

const asyncCall = (method, url) => (
  axios({
    url: url.slice(1),
    method
  })
);
//route
// app.get("/", (req, res) => {

// });

app.get("/:url*", ({ url }, res) => {
  const jsonObj = asyncCall('GET', url);

  jsonObj.then(response => res.send(response.data), 
    rej => res.send(`Error: \n ${rej.JSON}`));
});

const PORT = process.env.PORT || 5000;

// middleware
// app.use(function(req, res, next) {
//   console.log("Middleware");
//   req.header("Access-Control-Allow-Origin", "*");
//   req.header(
//     "Access-Control-Allow-Headers", 
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers", 
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));




// const url = `https://jobs.github.com/positions.json?description=python&full_time=true&location=sf`;
// const url = `https://api.exchangeratesapi.io/latest`;