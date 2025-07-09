import electronicsModel from "../../model/electronics.js";

export async function postData(data) {
    try {
        let result = await electronicsModel.create(data);
        return result
    } catch (error) {
        console.log(error.message);
        throw new Error("Failed to create electronics data");
    }
}