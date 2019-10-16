const router = require('express').Router();

const {getDogs, getDogById} = require('../controllers/dogController.js');

router.get('/dogs', getDogs);

router.get('/dogs/:id', getDogById);

exports.dogRouter = router;