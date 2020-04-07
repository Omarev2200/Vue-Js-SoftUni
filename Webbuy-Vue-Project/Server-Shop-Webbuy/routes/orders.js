const controllers = require('../controllers');
const router = require('express').Router();
router.get('/', controllers.order.get);
router.post('/', controllers.order.post);
router.delete('/:id', controllers.order.delete);
module.exports = router;