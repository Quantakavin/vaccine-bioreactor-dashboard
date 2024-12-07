import React from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
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

    return (isPending ? <p>No content to display</p> : <Graph title="Stirring Speed" data={data} min={0} max={5000} color="#03b7b7"/>)
}

const LatestReading = () => {
    const { isPending, error, data } = useQuery({
        queryKey: ['lateststirring'],
        queryFn: async () => {
            const response = await axios.get(`${config.baseURL}/lateststirring`)
            return response.data
        },
    })

    return (<h4> Latest Reading: {(error || isPending) ? "Unavaiable" : data[0].Reading + " RPM"} </h4>)
}

const StirringForm = () => {
    const { register, handleSubmit, reset } = useForm();

    const mutation = useMutation({
        mutationFn: async (data) => {
            return await axios.put(`${config.baseURL}/stirring`, data);
        }
    })

    const onSubmit = (data) => {
        mutation.mutate(data, {
            onSuccess: () => {
                alert('Stirring Speed updated successfully');
                reset();
            },
            onError: (error) => {
                console.log('Error updating stirring speed:', error);
                alert('Failed to update stirring speed');
            },
        });
    }


    return (
        <div className="formcontainer">
            <LatestReading />
            <h4>Update Stirring Speed:</h4>
            <form className="updateform" onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    label="Stirring Speed"
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

const Stirring = () => {
    return (
        <div className="container">
            <h1 className="title">Stirring Speed</h1>
            <StirringChart />
            <StirringForm />
        </div>
    );
};

export default Stirring;