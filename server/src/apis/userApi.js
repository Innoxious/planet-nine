const express = require('express');
const router = express.Router();

router.get('/hello', (req, res) => {
  res.send({ data: 'Hello From Express' });
});

module.exports = router;
