const temperature = require('../models/temperature')
const mqttClient = require('../config/mqttClient')

module.exports.getReadings = async (req, res) => {
    try {
        const results = await temperature.getReadings()
        return res.status(200).json(results)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'temperature values cannot be retrieved' })
    }
}

module.exports.createReading = async (req, res) => {
    const { reading, read_time } = req.body
    try {
        const results = await temperature.createReading(reading, read_time)
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
        mqttClient.publish('174f42b00b917ee34dd458b473ed90d0-temperature-update', JSON.stringify({reading: reading}))
        return res.status(200).json({ message: 'Temperature updated successfully' })
    } catch (error) {
        console.log(error)
        return res
            .status(500)
            .json({ message: 'Update reading failed in backend' })
    }
}