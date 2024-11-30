const temperatureController = require('./controllers/temperatureController')
const phController = require('./controllers/phController')
const stirringController = require('./controllers/stirringController')

module.exports = (router) => {
    router.get('/api/temperature', temperatureController.getReadings)
    router.get('/api/ph', phController.getReadings)
    router.get('/api/stirring', stirringController.getReadings)
    router.post('/api/temperature', temperatureController.createReading)
    router.post('/api/ph', phController.createReading)
    router.post('/api/stirring', stirringController.createReading)
    router.put('/api/temperature', temperatureController.updateReading)
    router.put('/api/ph', phController.updateReading)
    router.put('/api/stirring', stirringController.updateReading)
}
