const express = require('express');
const path = require('path');
const app = express();
const cardJSON = require('./content/cards.json');
// serve JSON data:


app.get("/", (req, res) => {
  res.json(cardJSON);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
