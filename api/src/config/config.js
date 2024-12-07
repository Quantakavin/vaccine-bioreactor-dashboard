const dotenv = require('dotenv')

dotenv.config()

module.exports = {
    host: process.env.HOSTNAME,
    user: process.env.USERNAME,
    database: process.env.DBNAME,
    password: process.env.PASSWORD,
    mqttBroker: process.env.MQTT_BROKER,
    mqttTemperatureTopic: process.env.MQTT_TEMPERATURE_TOPIC,
    mqttPhTopic: process.env.MQTT_PH_TOPIC,
    mqttStirringTopic: process.env.MQTT_STIRRING_TOPIC,
    mqttTemperatureUpdateTopic: process.env.MQTT_TEMPERATURE_UPDATE_TOPIC,
    mqttPhUpdateTopic: process.env.MQTT_PH_UPDATE_TOPIC,
    mqttStirringUpdateTopic: process.env.MQTT_STIRRING_UPDATE_TOPIC
}