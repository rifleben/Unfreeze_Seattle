const express = require('express');
const path = require('path');  // Import the path module
const app = express();
const port = 3000;

// Serve static files from the 'client' directory
app.use(express.static(path.join(__dirname, '../client')));

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
