import electronicsModel from "../../model/electronics.js";


export async function updateData(filter, data) {
    try {
        let result = electronicsModel.findByIdAndUpdate(filter, { $set: data }, { new: true })
        return result
    } catch (error) {
        console.log(error.message);
        throw new Error("Could not update electronics")
    }
}