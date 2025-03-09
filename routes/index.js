const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'My dick' });
  res.status(200).setHeader('Access-Control-Allow-Origin', '*');
  res.json({data: 'Hello My Black People!'});
});

module.exports = router;
