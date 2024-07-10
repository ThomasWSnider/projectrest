import { Schema } from "mongoose";


export const RatSchema = new Schema({
  name: { type: String, minLength: 1, maxLength: 30, required: true },
  callsign: { type: String, minLength: 1, maxLength: 30, required: true },
  picture: { type: String, minLength: 1, maxLength: 30, required: true },
  specialties: [{ type: String, minLength: 2, maxLength: 30 }]
}, { timestamps: true, toJSON: { virtuals: true } })