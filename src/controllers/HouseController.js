import { houseService } from "../services/HouseService";
import BaseController from "../utils/BaseController";

export class HouseController extends BaseController{
    constructor(){
        super('api/houses')
        this.router
        .get('', this.getAllHouses)
        // .get('/search', this.getHouseByQuery)
        // .get('/:houseId', this.getHouseById)
    }

    async getAllHouses(request,response, next){
        try {
            const house = await houseService.getAllHouses()
            response.send(house))
        } catch (error) {
            next(error)
        }
    }




}