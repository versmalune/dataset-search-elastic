const express = require('express');
const router = express.Router();
const search = require('./search');

router.get('/', (req, res) => {
  res.json({message: 'welcom to out api'});
});

router.use('/search', search);

module.exports = router;