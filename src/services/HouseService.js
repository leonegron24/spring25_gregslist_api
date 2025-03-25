import { dbContext } from "../db/DbContext"

class HouseService{

async getAllHouses(){
    const cars = await dbContext.House.find().populate('creator')
    return cars
}

}
export const houseService = new HouseService()