var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const stuff = [
    {
      _id: 'oeihfzeoi',
      title: 'My first th ing',
      description: 'All of the info about my first thing',
      imageUrl: '',
      price: 4900,
      userId: 'qsomihvqios',
    },
    {
      _id: 'oeihfzeomoihi',
      title: 'My second thing',
      description: 'All of the info about my second thing',
      imageUrl: '',
      price: 2900,
      userId: 'qsomihvqios',
    },
  ];
  res.status(200).json(stuff);

  //res.send('respond with a resource');
});

module.exports = router;
