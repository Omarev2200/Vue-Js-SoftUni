const models = require('../models');

module.exports = {
    post: (req, res, next) => {
        const { brand, gender, price, imigUrl, size, quantity } = req.body;
        
    
        models.Cart.create({brand, gender, price, imigUrl, size, quantity })
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
};