import React from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
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

    return (isPending ? <p>No content to display</p> : <Graph title="Ph" data={data} min={0} max={14} color="#00c04b"/>)
}

const PhForm = () => {
    const { register, handleSubmit, reset } = useForm();

    const mutation = useMutation({
        mutationFn: async (data) => {
            return await axios.put(`${config.baseURL}/ph`, data);
        }
    })

    const onSubmit = (data) => {
        mutation.mutate(data, {
            onSuccess: () => {
                alert('Ph updated successfully');
                reset();
            },
            onError: (error) => {
                console.log('Error updating ph:', error);
                alert('Failed to update ph');
            },
        });
    }


    return (
        <div className="formcontainer">
            <h4>Update Ph:</h4>
            <form className="updateform" onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    label="Ph"
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

const Ph = () => {
    return (
        <div className="container">
            <h1 className="title">Ph</h1>
            <PhChart />
            <PhForm />
        </div>
    );
};

export default Ph;