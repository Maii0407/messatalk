import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  image: {
    type: String
  },
  email: {
    type: String,
  }
})

export default mongoose.models.User || mongoose.model('User', UserSchema)