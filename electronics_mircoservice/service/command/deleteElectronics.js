import electronicsModel from "../../model/electronics.js";

export async function deleteData(filter) {
    try {
        let result = await electronicsModel.findByIdAndDelete(filter);
        return result
    } catch (error) {
        console.log(error.message);
        throw new Error("Failed to delete electronics data");
    }
}