import mongoose from 'mongoose'

const { Schema } = mongoose
const { ObjectId } = Schema

const AddressModel = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  location: {
    latitude: {
      type: Number,
    },
    longtitude: {
      type: Number,
    },
  },
  user: {
    type: ObjectId,
    ref: 'User',
  },
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
})

const Address = mongoose.model('Address', AddressModel)

export default Address
