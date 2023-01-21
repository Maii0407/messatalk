import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
const RoomSchema = new mongoose.Schema({
  name: {
    type: String,
    maxLength: [ 20, 'Room name cannot be more than 20 characters' ]
  },
  creator: {
    type: String
  },
  owner_name: {
    /* The owner of this pet */

    type: String,
    required: [true, "Please provide the pet owner's name"],
    maxlength: [60, "Owner's Name cannot be more than 60 characters"],
  },
  species: {
    /* The species of your pet */

    type: String,
    required: [true, 'Please specify the species of your pet.'],
    maxlength: [40, 'Species specified cannot be more than 40 characters'],
  },
  age: {
    /* Pet's age, if applicable */

    type: Number,
  },
  poddy_trained: {
    /* Boolean poddy_trained value, if applicable */

    type: Boolean,
  },
  diet: {
    /* List of dietary needs, if applicable */

    type: Array,
  },
  image_url: {
    /* Url to pet image */

    required: [true, 'Please provide an image url for this pet.'],
    type: String,
  },
  likes: {
    /* List of things your pet likes to do */

    type: Array,
  },
  dislikes: {
    /* List of things your pet does not like to do */

    type: Array,
  },
})

export default mongoose.models.Room || mongoose.model('Room', RoomSchema)