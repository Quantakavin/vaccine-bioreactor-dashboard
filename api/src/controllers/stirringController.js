const stirring = require('../models/stirring')
const client = require('../../index')

module.exports.getReadings = async (req, res) => {
    try {
        const results = await stirring.getReadings()
        return res.status(200).json(results)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'stirring values cannot be retrieved' })
    }
}

module.exports.createReading = async (req, res) => {
    const { reading, read_time } = req.body
    try {
        const results = await stirring.createReading(reading, read_time)
        return res.status(200).json(results)
    } catch (error) {
        console.log(error)
        return res
            .status(500)
            .json({ message: 'Create reading failed in backend' })
    }
}

module.exports.updateReading = async (req, res) => {
    const { reading } = req.body
    try {
        client.publish('174f42b00b917ee34dd458b473ed90d0-stirring-update', {reading: reading})
        return res.status(200).json({ message: 'Stirring updated successfully' })
    } catch (error) {
        console.log(error)
        return res
            .status(500)
            .json({ message: 'Create reading failed in backend' })
    }
}