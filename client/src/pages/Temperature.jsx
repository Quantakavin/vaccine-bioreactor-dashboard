import React from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
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

const TemperatureForm = () => {
    const { register, handleSubmit, reset } = useForm();

    const mutation = useMutation({
        mutationFn: async (data) => {
            return await axios.put(`${config.baseURL}/temperature`, data);
        }
    })

    const onSubmit = (data) => {
        mutation.mutate(data, {
            onSuccess: () => {
                alert('Temperature updated successfully');
                reset();
            },
            onError: (error) => {
                console.log('Error updating temperature:', error);
                alert('Failed to update temperature');
            },
        });
    }


    return (
        <div className="formcontainer">
            <h4>Update Temperature:</h4>
            <form className="updateform" onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    label="Temperature"
                    type="number"
                    variant="outlined"
                    {...register('reading', { required: true })}
                    inputProps={{
                        step: 0.01
                    }}
                    style={{ marginBottom: '10px'}}
                />
                <Button variant="contained" color="primary" type="submit" className="submitbutton">
                    Submit
                </Button>
            </form>
        </div>
    );
};

const Temperature = () => {
    return (
        <div className="container">
            <h1 className="title">Temperature</h1>
            <TemperatureChart />
            <TemperatureForm />
        </div>
    );
};

export default Temperature;