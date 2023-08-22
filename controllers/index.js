const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/',(req, res)=> {
  res.render('index', { title: 'Portfolio' });
});

/* GET about page. */
router.get('/work',(req, res)=> {
  res.render('work', { title: 'Portfolio Projects'});
});


module.exports = router;
