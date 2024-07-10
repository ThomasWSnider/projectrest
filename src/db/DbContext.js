import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { RatSchema } from "../models/Rat";
import { LocationSchema } from "../models/Location";
import { MissionSchema } from "../models/Mission";

class DbContext {

  Missions = mongoose.model('Mission', MissionSchema)
  Locations = mongoose.model('Location', LocationSchema)
  Rats = mongoose.model('Rat', RatSchema)
  Account = mongoose.model('Account', AccountSchema);
}

export const dbContext = new DbContext()
