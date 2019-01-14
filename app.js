const express = require("express");
const path = require('path');
const axios = require("axios");
const app = express();

//config
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './client'));
app.use(express.static(path.join(__dirname, './client')));

// const url = `https://jobs.github.com/positions.json?description=python&full_time=true&location=sf`;
const url = `https://api.exchangeratesapi.io/latest`;

app.get("/", (req, res) => {
  const asyncCall = axios({
    url,
    method: 'get',
  });

  asyncCall.then(
    response => { 
      // res.send(`${JSON.stringify(response.data)}`);
      console.log(response);
      
      res.render("index");
    }, 
    rej => res.send(`Error: \n ${rej.JSON}`));
  
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));


// middleware
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers", 
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });