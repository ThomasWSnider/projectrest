import { locationsService } from "../services/LocationsService"
import BaseController from "../utils/BaseController"


export class LocationsController extends BaseController {
  constructor() {
    super('api/locations')
    this.router
      .get('', this.getAllLocations)
  }

  async getAllLocations(request, response, next) {
    try {
      const locations = await locationsService.getAllLocations()
      response.send(locations)
    } catch (error) {
      next(error)
    }
  }
}