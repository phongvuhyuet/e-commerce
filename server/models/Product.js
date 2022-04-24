import mongoose from 'mongoose'

const { Schema } = mongoose
const { ObjectId } = Schema

const ProductModel = new Schema({
  name: {
    type: String,

    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  img_path: {
    type: String,
    required: true,
  },
  model_path: {
    type: String,
    required: true,
  },
  options: [
    {
      _id: ObjectId,
      name: String,
      quantity: Number,
      cur_price: Number,
    },
  ],
  shop: {
    type: ObjectId,
    ref: 'Shop',
  },
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
})

const Product = mongoose.model('Product', ProductModel)

export default Product
