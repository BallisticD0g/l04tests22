var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//how to route
//option 1 and the easiest
// router.get('/about', (req, res, next) => {
//   //tell express to render an hbs view template
//   res.render('about', { email:"contact@email.com"});
// });

module.exports = router;
