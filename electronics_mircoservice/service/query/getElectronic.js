import electronicsModel from "../../model/electronics.js";

export async function getData(query) {
    try {
        let data = await electronicsModel.find(query);
        return data
    } catch (error) {
        console.log(error.message);
        throw new Error('Failed to get data');
    }
}