import mongoose from 'mongoose'

const { Schema } = mongoose
const { ObjectId } = Schema

const SaleOffModel = new Schema({
  name: String,
  description: String,
  start_time: {
    type: Date,
    default: new Date(),
  },
  duration: {
    type: Number,
    default: -1,
  },

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
      quantity: {
        type: Number,
        default: -1,
      },
    },
  ],
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
})

const SaleOff = mongoose.model('SaleOff', SaleOffModel)

export default SaleOff
