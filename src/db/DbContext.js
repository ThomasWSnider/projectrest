import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { RatSchema } from "../models/Rat";
import { LocationSchema } from "../models/Location";

class DbContext {

  Locations = mongoose.model('Location', LocationSchema)
  Rats = mongoose.model('Rat', RatSchema)
  Account = mongoose.model('Account', AccountSchema);
}

export const dbContext = new DbContext()
