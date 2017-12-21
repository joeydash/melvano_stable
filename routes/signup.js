let express = require('express');
let router = express.Router();
let context = {
    "active_page_index" : 5
};
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render("signup",context);
});

module.exports = router;
