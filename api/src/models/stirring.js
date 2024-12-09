const connection = require('../config/database')

module.exports.getReadings = async () => {
    const getReadingsQuery = `SELECT Reading, Read_At FROM Stirring`
    return connection.query(getReadingsQuery)
}

module.exports.getLatestReading = async () => {
    const getReadingsQuery = `SELECT Reading FROM Stirring ORDER BY Read_At DESC LIMIT 1`
    return connection.query(getReadingsQuery)
}

module.exports.createReading = async (reading) => {
    const createReading = `INSERT INTO Stirring (Reading, Read_At) values (?, NOW())`
    return connection.query(createReading, [reading])
}