import React from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import Graph from '../components/Graph';
import config from '../config/config'

const StirringChart = () => {
    const { isPending, error, data } = useQuery({
        queryKey: ['stirring'],
        queryFn: async () => {
            const response = await axios.get(`${config.baseURL}/stirring`)
            return response.data
        },
    })

    if (error) {
        console.log(error)
        return <p>No content to display</p>
    }

    return (isPending ? <p>No content to display</p> : <Graph title="Stirring Speed" data={data} />)
}

const Stirring = () => {
    return (
        <div>
            <h2>Stirring Speed</h2>
            <StirringChart />
        </div>
    );
};

export default Stirring;