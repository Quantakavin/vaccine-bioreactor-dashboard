const connection = require('../config/database')

module.exports.getReadings = async () => {
    const getReadingsQuery = `SELECT Reading, Read_At FROM Stirring`
    return connection.query(getReadingsQuery)
}

module.exports.createReading = async (reading, read_time) => {
    const createReading = `INSERT INTO Stirring (Reading, Read_At) values (?, ?)`
    return connection.query(createReading, [reading, read_time])
}