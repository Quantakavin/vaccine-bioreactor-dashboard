import React from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { Alert, Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Graph from '../components/Graph';
import config from '../config/config';
import Swal from "sweetalert2";

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

const LatestReading = () => {
    const { isPending, error, data } = useQuery({
        queryKey: ['latestph'],
        queryFn: async () => {
            const response = await axios.get(`${config.baseURL}/latestph`)
            return response.data
        },
    })

    return (<h4> Latest Reading: {(error || isPending) ? "Unavaiable" : data[0].Reading} </h4>)
}

const PhForm = () => {

    const Toast = Swal.mixin({
        toast: true,
        position: "top",
        width: 500,
        showConfirmButton: false,
        showCloseButton: true,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });

    const { register, handleSubmit, reset } = useForm();

    const mutation = useMutation({
        mutationFn: async (data) => {
            return await axios.put(`${config.baseURL}/ph`, data);
        }
    })

    const onSubmit = (data) => {
        mutation.mutate(data, {
            onSuccess: () => {
                Toast.fire({
                    icon: "success",
                    title: "pH updated successfully"
                });
                reset();
            },
            onError: (error) => {
                Toast.fire({
                    icon: "error",
                    title: "Failed to update pH"
                });
                console.log('Error updating pH:', error);
            },
        });
    }


    return (
        <div className="formcontainer">
            <LatestReading />
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
                    className="formfield"
                    style={{ marginBottom: '10px'}}
                />
                <Button variant="contained" color="primary" type="submit" className="submitbutton">
                    Submit
                </Button>
            </form>
            {mutation.isError? <Alert style = {{ marginTop: 12, fontSize: 15 }} severity="error">{mutation.error.response.data.message}</Alert> : <></>}
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