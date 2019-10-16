const router = require('express').Router();

const {dogRouter} = require('./dog.js');
//const {ownerRouter} = require('./owner.js');

router.use('/api/v1.0/', dogRouter);
//router.use('/api/v1.0/', ownerRouter);

exports.router = router;