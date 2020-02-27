const express = require('express');
const router = express.Router();
const Mercury = require('@postlight/mercury-parser');

/* GET home page. */
router.get('/', function(_, res) {
  res.send({ title: 'Welcome to Mercury Parser API' });
});

router.get('/parse', async (req, res) => {
    const result = await Mercury.parse(req.query.url);

    res.send(result)
});

router.post('/parse-html', async (req, res) => {
  const result = await Mercury.parse(
    req.body.url,
    { contentType: 'html', html: req.body.html });

  res.send(result)
});

module.exports = router;
