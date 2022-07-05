// Import express and create a router object
const express = require('express');
const router = express.Router();

// configure routes
router.get('/', (req, res, next) => {
  //tell express to render an hbs view template
  res.render('about', { email:"contact@email.com"});
});

//export the router object
module.exports = router;

