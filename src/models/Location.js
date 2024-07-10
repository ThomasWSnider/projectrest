import { Schema } from "mongoose";


export const LocationSchema = new Schema({
  country: { type: String, minLength: 2, maxLength: 45, required: true },
  area: { type: String, minLength: 2, maxLength: 45, required: true },
  labels: [{ type: String, minLength: 2, maxlength: 45, required: true }]
}, { timestamps: true, toJSON: { virtuals: true } })