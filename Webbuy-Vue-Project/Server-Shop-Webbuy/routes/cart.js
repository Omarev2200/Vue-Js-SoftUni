const controllers = require('../controllers');
const router = require('express').Router();
router.get('/', controllers.cart.get);
router.post('/', controllers.cart.post);
router.delete('/:id', controllers.cart.delete);
router.delete('/', controllers.cart.deleteAll);
module.exports = router;