const models = require('../models');

module.exports = {
  get: (req, res, next) => {
    const limit = +req.query.limit;
    if (limit) {
      models.Products.find().populate('author').sort({ _id: -1 }).limit(limit)
        .then((products) => res.send(products))
        .catch(next);
      return;
    }
    models.Products.find().populate('author')
      .then((products) => res.send(products))
      .catch(next);
  },
  
getAllMyProduct: (req, res, next) => {
    
  console.log(req.params.id)
    
    models.Products.find({'author': req.params.id})
      .then((Products) => res.send(Products))
      .catch(next);
  },
  
  getOne: (req, res) => {
    
    const postId = req.params.id
    models.Products.findById(postId)
      .then(post => {
        res.status(200).json(post)
      }).catch((err) => {
        console.log(err)
    
      })
  },

  post: (req, res, next) => {
    const { brand, gender, price, imigUrl, size } = req.body;
    const { _id } = req.user;

    models.Products.create({brand, gender, price, imigUrl, size, author: _id })
      .then((createdProduct) => {
        return Promise.all([
          models.User.updateOne({ _id }, { $push: { posts: createdProduct } }),
          models.Products.findOne({ _id: createdProduct._id })
        ]);
      })
      .then(([modifiedObj, ProductObj]) => {
        res.send(ProductObj);
      })
      .catch(next);
  },

  put: (req, res, next) => {
    const id = req.params.id;
    const { brand, price, imigUrl, gender, size } = req.body;
    models.Products.updateOne({ _id: id }, {brand, price, imigUrl, gender, size})
      .then((updatedProduct) => res.send(updatedProduct))
      .catch(next)
  },

  delete: (req, res, next) => {
    const id = req.params.id;
    models.Products.deleteOne({ _id: id })
      .then((removedProduct) => res.send(removedProduct))
      .catch(next)
  },

  search: (req, res) => {
    const query = req.query.q;
    
    models.Products.find({ })
        .then((articles) => {
            const filteredArticles = articles.filter((a) => {
                return a.brand.toLowerCase().includes(query.toLowerCase());
            });
            const context = {
                query: query,
                articles: filteredArticles
            };

            res.send(context);
        })
        .catch(console.error);
}
};