# Vaccine Bioreactor Dashboard


## Installations

Install the following:

[NodeJS](https://nodejs.org/en/download/prebuilt-installer)

[MySQL](https://dev.mysql.com/downloads/mysql/)

[SQL Workbench](https://dev.mysql.com/downloads/workbench/)

## Database

Follow this [tutorial](https://dev.mysql.com/doc/workbench/en/wb-getting-started-tutorial-create-connection.html) to create new database connection in SQL Workbench

The hostname, username and password you set here are what you have to put in the api .env file

Copy and paste the code in main.sql into the SQL workbench and run it. This will create the vaccine_bioreactor database with the tables for ph, stirring and temperature.

## API

Create a .env file in the main src/folder

The .env should contain this:


```bash
HOSTNAME = "YOUR_HOSTNAME"
USERNAME = "YOUR_USERNAME"
PASSWORD = "YOUR_PASSWORD"
DBNAME = "Vaccine_Bioreactor"
MQTT_BROKER = "mqtt://broker.hivemq.com"
MQTT_TEMPERATURE_TOPIC = '174f42b00b917ee34dd458b473ed90d0-temperature'
MQTT_PH_TOPIC = '174f42b00b917ee34dd458b473ed90d0-ph'
MQTT_STIRRING_TOPIC = '174f42b00b917ee34dd458b473ed90d0-stirring'
MQTT_TEMPERATURE_UPDATE_TOPIC = '174f42b00b917ee34dd458b473ed90d0-temperature-update'
MQTT_PH_UPDATE_TOPIC = '174f42b00b917ee34dd458b473ed90d0-ph-update'
MQTT_STIRRING_UPDATE_TOPIC = '174f42b00b917ee34dd458b473ed90d0-stirring-update'
```

Replace with YOUR_HOSTNAME, YOUR_USERNAME and YOUR_PASSWORD with the hostname, username and password you set in SQL Workbench

Install all dependencies through this command:

```bash
npm install
```
Run the server through this command:

```bash
node index
```

## Client

Create a .env file in the main src/ folder

The .env should contain this:

```bash
VITE_BASE_URL = "http://localhost:4000/api"
```

Install all dependencies through this command:

```bash
npm install
```

Run the server through this command:

```bash
npm run dev
```