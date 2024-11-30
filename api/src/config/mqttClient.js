const mqtt = require('mqtt');

const client = mqtt.connect("mqtt://broker.hivemq.com")

client.on('connect', () => {
    client.subscribe('174f42b00b917ee34dd458b473ed90d0-temperature');
    client.subscribe('174f42b00b917ee34dd458b473ed90d0-ph');
    client.subscribe('174f42b00b917ee34dd458b473ed90d0-stirring');
});

module.exports = client;