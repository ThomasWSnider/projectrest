import { ratsService } from "../services/RatsService";
import BaseController from "../utils/BaseController";


export class RatsController extends BaseController {
  constructor() {
    super('api/rats')
    this.router
      .get('', this.getAllAgents)
  }

  async getAllAgents(request, response, next) {
    try {
      const agents = await ratsService.getAllAgents()
      response.send(agents)
    } catch (error) {
      next(error)
    }
  }
}