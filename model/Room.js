import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
const RoomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  creator: {
    type: String
  },
})

export default mongoose.models.Room || mongoose.model('Room', RoomSchema)