var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/api/dummydata', (req, res, next) => {
  res.json({
    data: [
      {
        name: "Laura",
        job: "Dance instructor"
      },
      {
        name: "Stef",
        job: "UI Developer"
      },
      {
        name: "Dancila",
        job: "errror"
      }
    ]
  });
});

module.exports = router;
