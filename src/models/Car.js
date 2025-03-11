import { Schema } from "mongoose";

export const CarSchema = new Schema(
  // schema definition
  {
    // _id property is generated by mongodb, not needed on your schema
    make: { type: String, minLength: 3, maxLength: 50, required: true },
    model: { type: String, minLength: 1, maxLength: 100, required: true },
    year: { type: Number, min: 1886, max: 2025, required: true },
    price: { type: Number, min: 0, max: 1000000, required: true },
    imgUrl: { type: String, minLength: 0, maxLength: 500, required: true },
    description: { type: String, maxLength: 500, required: false },
    // NOTE enum denotes that the engineType must be one of the strings in the array
    engineType: { type: String, enum: ['V6', 'V8', 'V10', '4-cylinder', 'unknown'], required: true, default: 'unknown' },
    color: { type: String, maxLength: 50, required: true },
    tags: [{ type: String, maxLength: 50 }],
    mileage: { type: Number, min: 0, max: 1000000, required: true },
    hasCleanTitle: { type: Boolean, required: true, default: true },
    // NOTE creatorId is technically a string, but the objectId type is more specific and appropriate
    // the id of the person who created this car
    creatorId: { type: Schema.ObjectId, required: true, ref: 'Account' }
  },
  // schema options
  {
    // adds updatedAt and createdAt timestamps for each car in database
    timestamps: true,
    // allows us to send virtual properties over the network
    toJSON: { virtuals: true }
  }
)

// NOTE virtual properties do not exist in the database
// creator is the name of the virtual property
CarSchema.virtual('creator', {
  ref: 'Account', // which collection am I looking through
  localField: 'creatorId', // what do I have on my schema that I can use to get something from the other collection
  foreignField: '_id', // what will my localField match in the referenced (ref) collection
  justOne: true
})