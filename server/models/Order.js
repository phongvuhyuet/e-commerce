import mongoose from 'mongoose'

const { Schema } = mongoose
const { ObjectId } = Schema

const OrderModel = new Schema({
  status: {
    type: String,
    required: true,
  },
  items: [
    {
      product_id: {
        type: ObjectId,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      option_id: {
        type: ObjectId,
        required: true,
      },
    },
  ],
  user: {
    type: ObjectId,
    ref: 'User',
  },
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
})

const Order = mongoose.model('Order', OrderModel)

export default Order
