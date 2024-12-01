import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Graph from '../components/Graph';
import config from '../config/config'

const TemperatureChart = () => {
    const { isPending, error, data } = useQuery({
        queryKey: ['temperature'],
        queryFn: async () => {
            const response = await axios.get(`${config.baseURL}/temperature`)
            return response.data
        },
    })

    if (error) {
        console.log(error)
        return <p>No content to display</p>
    }

    return (isPending ? <p>No content to display</p> : <Graph title="Temperature" data={data} min={0} max={50} />)
}

const Temperature = () => {
    return (
        <div className="container">
            <h1 className="title">Temperature</h1>
            <TemperatureChart />
        </div>
    );
};

export default Temperature;