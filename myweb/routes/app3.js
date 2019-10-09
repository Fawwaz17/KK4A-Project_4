/* App 3 - respon JSON*/
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.json(
        {
            message: 'SMK Telkom Sandhy Putera Purwokerto',
            user: {name:'Stematel', email: 'stematel@smktelkom-pwt.sch.id',
            website: 'http://smktelkom-pwt.sch.id'}
        }
    );
});

module.exports = router;