var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET incident page. */
router.get('/incident', function(req, res, next) {
  res.render('incident', { title: 'Report Incident' });
});

/* GET incident dashboard. */
router.get('/dashboard', function(req, res, next) {
  res.render('dashboard', { title: 'Incident Dashboard' });
});

module.exports = router;
