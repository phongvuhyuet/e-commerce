import mongoose from 'mongoose'

const { Schema } = mongoose
const { ObjectId } = Schema

const SaleOffModel = new Schema({
  name: String,
  description: String,
  shop: {
    type: ObjectId,
    ref: 'Shop',
  },
  products: [
    {
      product: {
        type: ObjectId,
        ref: 'Product',
      },
      off_value: {
        type: Number,
        required: true,
      },
      unit: {
        type: String,
        default: '%',
      },
    },
  ],
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
})

const SaleOff = mongoose.model('SaleOff', SaleOffModel)

export default SaleOff
