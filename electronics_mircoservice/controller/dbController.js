import { getData } from "../service/query/getElectronic.js";
import { postData } from "../service/command/createElectronics.js";
import { deleteData } from "../service/command/deleteElectronics.js";
import { updateData } from "../service/command/updateElectronics.js";


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

async function createElectionic(req, res) {
    try {
        let data = req.body;
        let output = await postData(data);
        if (!output || output.length == 0) return res.status(404).json({ message: 'Data not found' })

        return res.status(200).json(output)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

async function deleteElectionic(req, res) {
    try {
        let query = req.params.id
        let output = await deleteData(query);
        if (!output || output.length == 0) return res.status(404).json({ message: 'Data not found' })

        return res.status(200).json(output)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

async function updateElectionic(req, res) {
    try {
        let query = req.params.id
        let newData = req.body
        let output = await updateData(query, newData);
        if (!output || output.length == 0) return res.status(404).json({ message: 'Data not found' })

        return res.status(200).json(output)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export { getAllElectronic, createElectionic, deleteElectionic, updateElectionic }