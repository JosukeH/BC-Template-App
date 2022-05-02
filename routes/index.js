var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) =>  {
  res.render('index', { title: 'Express' });
});


router.get('/greetings', (req,res, next) => {
  res.json({ok: 'todo ok'})
});

router.get('/api/auth', (req, res, next) => {
  console.log(req.query)
  res.json({ok: 'todo ok'})
})

module.exports = router;
