const express = require("express");
const axios = require("axios");


const app = express();

const url = `https://jobs.github.com/positions.json?description=python&full_time=true&location=sf`;

app.get("/", (req, res) => {
  const asyncCall = axios({
    url,
    method: 'get',
  });

  asyncCall.then(
    response => { 
      console.log(response.data[0]);
      res.send(`${response.data.map(el => JSON.stringify(el))}`);
    }, 
    rej => res.send(`Error: \n ${rej.JSON}`));
  
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));