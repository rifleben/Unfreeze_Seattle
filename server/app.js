const express = require('express');
const path = require('path');
const app = express();
const cardJSON = require('./content/cards.json');
const cors = require('cors');
// serve JSON data:

app.use(cors());

//serve static files:
app.use(express.static(path.join(__dirname, '../client/build')));


app.get("/notecards", (req, res) => {
  res.json(cardJSON);
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
