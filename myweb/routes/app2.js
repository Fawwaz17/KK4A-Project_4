var express = require('express');
var router = express.Router();

/* App 2 - render tamplate */
router.get('/(:id)/(:category)', function(req, res, next){
    res.render(
        'app2', {
            id: req.params.id,
            category: req.params.category,
        }
    );
});

module.exports = router;