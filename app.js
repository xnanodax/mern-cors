const express = require("express");
const axios = require("axios");


const app = express();

// const url = `https://jobs.github.com/positions.json?description=python&full_time=true&location=sf`;
const url = `https://api.exchangeratesapi.io/latest`;

// middleware
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers", 
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.get("/", (req, res) => {
  const asyncCall = axios({
    url,
    method: 'get',
  });

  asyncCall.then(
    response => { 
      // console.log(response.data);
      res.send(`${JSON.stringify(response.data)}`);
    }, 
    rej => res.send(`Error: \n ${rej.JSON}`));
  
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));