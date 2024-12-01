import React from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import Graph from '../components/Graph';
import config from '../config/config'

const PhChart = () => {
    const { isPending, error, data } = useQuery({
        queryKey: ['ph'],
        queryFn: async () => {
            const response = await axios.get(`${config.baseURL}/ph`)
            return response.data
        },
    })

    if (error) {
        console.log(error)
        return <p>No content to display</p>
    }

    return (isPending ? <p>No content to display</p> : <Graph title="Ph" data={data} min={0} max={14} />)
}

const Ph = () => {
    return (
        <div className="container">
            <h1 className="title">Ph</h1>
            <PhChart />
        </div>
    );
};

export default Ph;