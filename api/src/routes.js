const validation = require('./middlewares/validation')
const temperatureController = require('./controllers/temperatureController')
const phController = require('./controllers/phController')
const stirringController = require('./controllers/stirringController')

module.exports = (router) => {
    router.get('/api/temperature', temperatureController.getReadings)
    router.get('/api/ph', phController.getReadings)
    router.get('/api/stirring', stirringController.getReadings)
    router.get('/api/latesttemperature', temperatureController.getLatestReading)
    router.get('/api/latestph', phController.getLatestReading)
    router.get('/api/lateststirring', stirringController.getLatestReading)
    router.put('/api/temperature', validation.validateNo, validation.validateTemperature, temperatureController.updateReading)
    router.put('/api/ph', validation.validateNo, validation.validatePh, phController.updateReading)
    router.put('/api/stirring', validation.validateNo, validation.validateStirring, stirringController.updateReading)
}
