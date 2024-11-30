const mqtt = require('mqtt');
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const formData = require('express-form-data')
const routes = require('./src/routes')
const config = require('./src/config/config');

const app = express()
app.use('*', cors())

const PORT = process.env.PORT || 4000

const http = require('http');

const server = http.createServer(app);

const phController = require('./src/controllers/phController');
const temperatureController = require('./src/controllers/temperatureController');
const stirringController = require('./src/controllers/phController');

const client = mqtt.connect("mqtt://broker.hivemq.com")

client.on('connect', () => {
    client.subscribe('174f42b00b917ee34dd458b473ed90d0-temperature');
    client.subscribe('174f42b00b917ee34dd458b473ed90d0-ph');
    client.subscribe('174f42b00b917ee34dd458b473ed90d0-stirring');

    client.on('message', (topic, message) => {
        if (topic === '174f42b00b917ee34dd458b473ed90d0-temperature') {
            const parsedmessage = JSON.parse(`[${message}]`);
            temperatureController.createReading(
                parsedmessage[0].reading,
                parsedmessage[0].read_time
            );
        } else if (topic === '174f42b00b917ee34dd458b473ed90d0-ph') {
            const parsedmessage = JSON.parse(`[${message}]`);
            phController.createReading(
                parsedmessage[0].reading,
                parsedmessage[0].read_time
            );
        } else if (topic === '174f42b00b917ee34dd458b473ed90d0-stirring') {
            const parsedmessage = JSON.parse(`[${message}]`);
            stirringController.createReading(
                parsedmessage[0].reading,
                parsedmessage[0].read_time
            );
        }
    });
});

app.use(formData.parse({}))
app.use(formData.format())
app.use(formData.stream())
app.use(formData.union())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const router = express.Router()
app.use(router)

server.listen(PORT, (err) => {
    if (err) return console.log(`Cannot Listen on PORT: ${PORT}`)
    return console.log(`Server is Listening on: http://localhost:${PORT}/`)
})

routes(router)

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(404).send("Sorry can't find that!")
})

module.exports = client