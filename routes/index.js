let express = require('express');
let router = express.Router();
let context = {
    "active_page_index" : 1
};
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',context);
});

module.exports = router;
