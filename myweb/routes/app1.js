var express = require('express');
var router = express.Router();

/* App 1 - render tamplate */
router.get('/', function(req, res, next){
    res.render(
        'app1', {
            message: 'SMK Telkom Sandhy Putera Purwokerto',
            user: {name:'Stematel', email: 'stematel@smktelkom-pwt.sch.id',
            website: 'http://smktelkom-pwt.sch.id'}
        }
    );
});

module.exports = router;