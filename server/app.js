const express = require('express');
const path = require('path');
const app = express();
const cardJSON = require('./content/cards.json');
const cors = require('cors');

app.use(cors()); //enable cors for all routes

//serve react built files:
app.use(express.static(path.join(__dirname, '../client/build')));

//serve json content as its own endpoint:
app.get("/notecards", (req, res) => {

  // randomize the order of the notecards
  cardJSON.notecards.sort(() => Math.random() - 0.5);
  res.json(cardJSON);
});


// serve notecards in sorted order:
app.get("/notecards/sorted", (req, res) => {
  res.json(cardJSON);
});

// use process.env.PORT for cloud deployment heroku env will have it set
// otherwise we use 3001 for local server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
