import mongoose from 'mongoose'

const { Schema } = mongoose

const UserModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  avatar_url: {
    type: String,
  },
  is_shop_owner: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
})

const User = mongoose.model('User', UserModel)

export default User
