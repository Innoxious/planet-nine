const express = require('express');
const app = express();

app.get('/test/hello', (req, res) => {
  res.send({ data: 'Hello From Express' });
});
