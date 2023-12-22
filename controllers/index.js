const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/',(req, res)=> {
  res.render('index', { title: 'Portfolio' });
});

/* GET work page. */
router.get('/nxpro',(req, res)=> {
  res.render('nxpro', { title: 'NxPro'});
});
module.exports = router;
