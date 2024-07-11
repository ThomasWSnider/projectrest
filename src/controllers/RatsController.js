import { missionsService } from "../services/MissionsService";
import { ratsService } from "../services/RatsService";
import BaseController from "../utils/BaseController";


export class RatsController extends BaseController {
  constructor() {
    super('api/rats')
    this.router
      .get('', this.getAllAgents)
      .get('/:ratId/missions', this.getAgentMissions)
  }

  async getAllAgents(request, response, next) {
    try {
      const agents = await ratsService.getAllAgents()
      response.send(agents)
    } catch (error) {
      next(error)
    }
  }

  async getAgentMissions(request, response, next) {
    try {
      const ratId = request.params.ratId
      const ratMissions = await missionsService.getAgentMissions(ratId)
      response.send(ratMissions)
    } catch (error) {
      next(error)
    }
  }
}