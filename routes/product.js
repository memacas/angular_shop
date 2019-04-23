const Product = require('../models/product'),
      jwt = require('jsonwebtoken'),
      config = require('../config/database'),
      manage_product = require('../services/manageProduct'),
      async = require('async');

module.exports = (router) => {

  router.get('/detailProduct/:id', (req, res) => {
    if (!req.params.id)
      res.json({ success: false, message: 'No existe Id en parametro' });
    else {
      Product.findOne({_id: req.params.id}, (err, product) => {
        if (err) res.json({ success: false, message: err})
        else if(!product) res.json({success: false, message: 'no hay productos'})
        else res.json({ success: true, product: product})
      })
    }
  })

  router.get('/allProducts', (req, res) => {
    Product.find({}, (err, products) => {
      if (err) res.json({ success: false, message: err})
      else if(!products) res.json({success: false, message: 'no hay productos'})
      else res.json({ success: true, products: products})
    }).sort({'nombre': 1});
  })

  router.get('/createProducts', (req, res) => {

    let respuestas = [];

    manage_product.poblarProductos().forEach(function (foto) {
      let nombre_producto = foto.substr(0, foto.indexOf('.'));
      nombre_producto = nombre_producto.charAt(0).toUpperCase() + nombre_producto.slice(1);

      let product = new Product({
        nombre: nombre_producto,
        nombreFoto: foto,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        stock: manage_product.randomInt(5, 99),
        precio: manage_product.randomInt(1000, 20000)
      });

      product.save((err) => {
        if (err){
          if (err.code === 11000){
            respuestas.push({success: false, message: 'Ya existe ' + nombre_producto});
          }
          else respuestas.push({success: false, message: 'no grabó ' + nombre_producto + '. Err: ', err});
        }
        else
          respuestas.push({success: true, message: 'Se generò ' + nombre_producto});
      })
    });

    res.json({messages: respuestas})

  })

  return router;
}
