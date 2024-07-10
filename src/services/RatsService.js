import { dbContext } from "../db/DbContext"


class RatsService {


  async getAllAgents() {
    const agents = await dbContext.Rats.find()
    return agents
  }
}

export const ratsService = new RatsService