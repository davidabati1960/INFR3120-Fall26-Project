var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dashboard' });
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Dashboard' });
});
/* GET incident page. */
router.get('/incident', function(req, res, next) {
  res.render('incident', { title: 'Report Incident' });
});

module.exports = router;
