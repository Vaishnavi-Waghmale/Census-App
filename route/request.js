const express = require('express');
const router = express.Router();
const Census = require('../model/census');

router.get('/census', function (req, res, next) {
    Census.aggregate([{
        $sample: { sixe: 1 }
    }]).then(function (census) {
        console.log(census);
        res.send(census);
    }).catch(next);
});

module.exports = router;

