const connection = require('../config/database')

module.exports.getReadings = async () => {
    const getReadingsQuery = `SELECT Reading, Read_At FROM pH`
    return connection.query(getReadingsQuery)
}

module.exports.getLatestReading = async () => {
    const getReadingsQuery = `SELECT Reading FROM pH LIMIT 1`
    return connection.query(getReadingsQuery)
}

module.exports.createReading = async (reading, read_time) => {
    const createReading = `INSERT INTO pH (Reading, Read_At) values (?, ?)`
    return connection.query(createReading, [reading, read_time])
}