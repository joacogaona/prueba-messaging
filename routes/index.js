var express = require('express');
var router = express.Router();

/* GET home page. */

router.post(`/`, (req, res, next) => {
  console.log(req.query, `REQQUERYRRRYRYYRYRYYRYYRYRYYRY`)
  return res.status(200).json({ success: true })
})

module.exports = router;
