import { dbContext } from "../db/DbContext.js"

class HouseService{

async getAllHouses(){
    const house = await dbContext.House.find().populate('creator')
    return house
}

}
export const houseService = new HouseService()