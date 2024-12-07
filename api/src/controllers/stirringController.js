const stirring = require('../models/stirring')
const mqttClient = require('../config/mqttClient')
const config = require('../config/config')

module.exports.getReadings = async (req, res) => {
    try {
        const results = await stirring.getReadings()
        return res.status(200).json(results)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'stirring values cannot be retrieved' })
    }
}

module.exports.getLatestReading = async (req, res) => {
    try {
        const results = await stirring.getLatestReading()
        return res.status(200).json(results)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'latest stirring value cannot be retrieved' })
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
        mqttClient.publish(config.mqttStirringUpdateTopic, JSON.stringify({reading: reading}))
        return res.status(200).json({ message: 'Stirring updated successfully' })
    } catch (error) {
        console.log(error)
        return res
            .status(500)
            .json({ message: 'Update reading failed in backend' })
    }
}