const router = require('express').Router({mergeParams:true});

const {postUser, getUsers, getUser, modifyUser, deleteUser} = require('../controllers/userControllers.js');


//POST route
router.post('/', postUser);


//GET route to get all users 
router.get('/', getUsers);


//GET route to get a user by id 
router.get('/:userId', getUser);


//PUT or PATCH route to modify a user
router.get('/:userId', modifyUser);


//DELETE route to delete a user
router.get('/:userId', deleteUser);


//Export the router
module.exports = router;