import { dbContext } from "../db/DbContext"


class MissionsService {

  async getMissions() {
    const missions = await dbContext.Missions.find()
    return missions
  }
}

export const missionsService = new MissionsService