import mongoose from 'mongoose'

const { Schema } = mongoose
const { ObjectId } = Schema

const ShopModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: ObjectId,
    ref: 'User',
  },
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
})

const Shop = mongoose.model('Shop', ShopModel)

export default Shop
