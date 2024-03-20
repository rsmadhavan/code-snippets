const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
  res.send("Hey this worked");
});

router.get('/page2', (req,res,next) => {
  res.send("Hey this is page 2");
});

module.exports = router;