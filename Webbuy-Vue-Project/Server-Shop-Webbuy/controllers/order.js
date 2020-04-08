const models = require('../models');

module.exports = {
    post: (req, res, next) => {
        const { firstName, lastName, phoneNumber, products } = req.body;
        
    
        models.Orders.create({firstName, lastName, phoneNumber, products})
          .then((OrderObj) => {
            res.send(OrderObj);
          })
          .catch(next);
      },

      get: (req, res, next) => {
        models.Orders.find().populate('author')
          .then((orders) => res.send(orders))
          .catch(next);
      },

      delete: (req, res, next) => {
        const id = req.params.id;
        models.Orders.deleteOne({ _id: id })
          .then((removeOrder) => res.send(removeOrder))
          .catch(next)
      },
};