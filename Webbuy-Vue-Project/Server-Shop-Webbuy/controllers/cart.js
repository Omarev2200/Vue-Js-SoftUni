const models = require('../models');

module.exports = {
    post: (req, res, next) => {
        const { id, brand, gender, price, imigUrl, size, quantity } = req.body;
        
    
        models.Cart.create({id, brand, gender, price, imigUrl, size, quantity })
          .then((CartObj) => {
            res.send(CartObj);
          })
          .catch(next);
      },

      get: (req, res, next) => {
        models.Cart.find().populate('author')
          .then((carts) => res.send(carts))
          .catch(next);
      },

      delete: (req, res, next) => {
        const id = req.params.id;
        models.Cart.deleteOne({ id: id })
          .then((removedCart) => res.send(removedCart))
          .catch(next)
      },
};