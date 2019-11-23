const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  // res.render('index', { title: 'Express' });
  res.status(200).send('server up and running');
});

module.exports = router;
