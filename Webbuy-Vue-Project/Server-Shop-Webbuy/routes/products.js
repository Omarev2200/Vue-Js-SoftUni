const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

 router.get('/', controllers.product.get);

// router.get('/my-cars/:id', controllers.adCars.getAllMyAdCars);

// router.get('/search', controllers.adCars.search);



// router.get('/:id', controllers.adCars.getOne);

router.post('/',  controllers.product.post);

// router.put('/:id', auth(), controllers.adCars.put);

// router.delete('/:id', auth(), controllers.adCars.delete);

module.exports = router;