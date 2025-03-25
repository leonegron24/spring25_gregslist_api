import { houseService } from "../services/HouseService.js";
import BaseController from "../utils/BaseController.js";

export class HouseController extends BaseController{
    constructor(){
        super('api/houses')
        this.router
        .get('', this.getAllHouses)
        // .get('/search', this.getHouseByQuery)
        // .get('/:houseId', this.getHouseById)
    }

    async getAllHouses(request,response, next){
        console.log('Getting all houses...')
        try {
            const house = await houseService.getAllHouses()
            response.send(house)
        } catch (error) {
            next(error)
        }
    }




}