import React from 'react';
import { LineChart } from '@mui/x-charts';

const Graph = ({ title, data, min, max, color }) => {
    const xAxisData = data.map((item) => new Date(item.Read_At).getTime());
    const yAxisData = data.map((item) => item.Reading);

    return (
        <div className="graphcontainer" style={{ textAlign: 'center' }}>
            <LineChart
                xAxis={[
                    {
                        data: xAxisData,
                        scaleType: 'time',
                        label: 'Time',
                        labelStyle: {fontWeight: "bold", fontSize: 16},
                        valueFormatter: (value) => {
                            const date = new Date(value);
                            return date.toLocaleString('en-GB', {
                                month: 'short',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit',
                                second: '2-digit',
                            });
                        },
                    },
                ]}
                yAxis={[
                    {
                        label: title,
                        labelStyle: {fontWeight: "bold", fontSize: 16},
                        min: min,
                        max: max,
                    },
                ]}
                series={[
                    {
                        data: yAxisData,
                        area: true,
                        baseline: 'min',
                        color: color
                    },
                ]}
                height={400}
            />
        </div>
    );
};

export default Graph;
