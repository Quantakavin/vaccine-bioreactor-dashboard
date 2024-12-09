const temperature = require('../models/temperature')
const mqttClient = require('../config/mqttClient')
const config = require('../config/config')

module.exports.getReadings = async (req, res) => {
    try {
        const results = await temperature.getReadings()
        return res.status(200).json(results)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'temperature values cannot be retrieved' })
    }
}

module.exports.getLatestReading = async (req, res) => {
    try {
        const results = await temperature.getLatestReading()
        return res.status(200).json(results)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'latest temperature value cannot be retrieved' })
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
        const buffer = new ArrayBuffer(4);
        const dataView = new DataView(buffer);
        dataView.setFloat32(0, reading, true);
        message = new Uint8Array(buffer);
        mqttClient.publish(config.mqttTemperatureUpdateTopic, message)
        return res.status(200).json({ message: 'Temperature updated successfully' })
    } catch (error) {
        console.log(error)
        return res
            .status(500)
            .json({ message: 'Update reading failed in backend' })
    }
}