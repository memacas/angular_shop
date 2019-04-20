const mongoose = require('mongoose');

const Schema = mongoose.Schema,
      productSchema = new Schema({
      nombre: { type: String, required: true},
      nombreFoto: { type: String, required: true},
      descripcion: { type: String, required: true},
      stock: { type: Number, default: 0 },
      precio: { type: Array },
      createdAt: { type: Date, default: Date.now() }
      });

module.exports = mongoose.model('Product', productSchema);
