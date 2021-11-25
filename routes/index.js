const router = require('express').Router({mergeParams:true});

const cafesRouter = require ('./cafes.js');
const usersRouter = require ('./users.js');


router.use('/cafes', cafesRouter);
router.use('/users', usersRouter);



module.exports = router;