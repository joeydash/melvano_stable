let express = require('express');
let router = express.Router();
let context = {
    "active_page_index" : 6
};
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("login",context);
});

module.exports = router;
