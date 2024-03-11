const express = require('express');
const path = require('path');
const app = express();
const cardJSON = require('./content/cards.json');
const cors = require('cors');

app.use(cors()); //enable cors for all routes

//serve react built files:
app.use(express.static(path.join(__dirname, '../client/build')));

//serve json content:
app.get("/notecards", (req, res) => {
  res.json(cardJSON);
});

// use process.env.PORT for cloud deployment heroku env will have it set
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
