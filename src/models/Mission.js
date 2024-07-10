import { Schema } from "mongoose";


export const MissionSchema = new Schema({
  codename: { type: String, minLength: 2, maxLength: 30, required: true },
  objective: { type: String, minLength: 2, maxLength: 100, required: true },
  year: { type: String, minLength: 2, maxLength: 30, required: true },
  ratId: { type: Schema.ObjectId, required: true, ref: 'Rat' },
  locationId: { type: Schema.ObjectId, required: true, ref: 'Location' }
}, { timestamps: true, toJSON: { virtuals: true } })

MissionSchema.virtual('rat', {
  localField: 'ratId',
  ref: 'Rat',
  foreignField: '_id',
  justOne: true
})

MissionSchema.virtual('location', {
  localField: 'locationId',
  ref: 'Location',
  foreignField: '_id',
  justOne: true
})