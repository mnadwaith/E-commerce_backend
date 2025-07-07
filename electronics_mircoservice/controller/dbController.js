import { getData } from "../service/query/getElectronic.js";


async function getAllElectronic(req, res) {
    try {
        let query = {}
        if (req.query) {
            query = req.query;
        }
        let output = await getData(query);

        if (!output || output.length == 0) return res.status(404).json({ message: 'Data not found' })

        return res.status(200).json(output)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


export { getAllElectronic }