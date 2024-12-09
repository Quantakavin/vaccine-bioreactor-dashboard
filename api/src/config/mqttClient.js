const mqtt = require('mqtt');
const config = require('./config')

const client = mqtt.connect(config.mqttBroker)

client.on('connect', () => {
    client.subscribe(config.mqttTemperatureTopic);
    client.subscribe(config.mqttPhTopic);
    client.subscribe(config.mqttStirringTopic);
    client.subscribe(config.mqttTemperatureUpdateTopic);
    client.subscribe(config.mqttPhUpdateTopic);
    client.subscribe(config.mqttStirringUpdateTopic);
});

module.exports = client;