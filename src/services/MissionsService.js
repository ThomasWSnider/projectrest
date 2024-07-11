import { dbContext } from "../db/DbContext"


class MissionsService {

  async getMissions() {
    const missions = await dbContext.Missions.find().populate('rat location', '-name -picture')
    return missions
  }
  async createMission(missionData) {
    const mission = await dbContext.Missions.create(missionData)
    await mission.populate('rat location', '-name -picture')
    return mission
  }

  async getAgentMissions(ratId) {
    const ratMissions = await dbContext.Missions.find({ ratId: ratId }).populate('location')
    return ratMissions
  }

  async getLocationMissions(locationId) {
    const locationMissions = await dbContext.Missions.find({ locationId: locationId }).populate('rat location', '-name -picture')
    return locationMissions
  }
}

export const missionsService = new MissionsService