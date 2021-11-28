const router = require('express').Router({mergeParams:true});
const { validateCafe } = require('../middleware/validators');

const {postCafe, getCafes, getCafe, modifyCafe, /*deleteCafe*/} = require('../controllers/cafeControllers.js');


//POST route
router.post('/', validateCafe, postCafe);


//GET route to get all cafes 
router.get('/', getCafes);


//GET route to get a cafe by id 
router.get('/:cafeId', getCafe);


//PUT or PATCH route to modify a cafe
router.get('/:cafeId', modifyCafe);


//DELETE route to delete a cafe
// router.get('/:cafeId', deleteCafe);


//Export the router
module.exports = router;