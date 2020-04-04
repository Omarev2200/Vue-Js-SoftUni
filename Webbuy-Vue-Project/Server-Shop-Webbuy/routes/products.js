const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

 router.get('/', controllers.product.get);

// router.get('/my-cars/:id', controllers.product.getAllMyProduct);

 router.get('/search', controllers.product.search);



 router.get('/:id', controllers.product.getOne);

router.post('/', auth(), controllers.product.post);

 router.put('/:id', auth(), controllers.product.put);

 router.delete('/:id', auth(), controllers.product.delete);

module.exports = router;