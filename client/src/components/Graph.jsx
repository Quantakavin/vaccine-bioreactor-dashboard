import React from 'react';
import { LineChart } from '@mui/x-charts';

const Graph = ({ title, data }) => {
    const readings = []
    const read_times = []

    data.map((item) => {
        readings.push(item.Reading)
        read_times.push(new Date(item.Read_At))
    });

    console.log("readings are ", readings)
    console.log("read times are ", read_times)

    return (
        <div style={{ margin: '20px', textAlign: 'center' }}>
            <LineChart
                width={1000}
                height={600}
                xAxis={[{ data: read_times, scaleType: 'time', valueFormatter: (value) => {
                    const date = new Date(value)
                    return date.toLocaleString('en-GB', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                    })
                }}]}
                series={[
                    {
                        data: readings,
                        area: true,
                        baseline: 'min',
                    },
                ]}
            />
        </div>
    );
};

export default Graph;