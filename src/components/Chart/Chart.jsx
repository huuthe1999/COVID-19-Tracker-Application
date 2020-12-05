import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../../api'
import { Line, Bar } from 'react-chartjs-2';

import './style.css';

const Chart = () => {
    const [dailyData, setDailyData] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const fetchData = await fetchDailyData();
            setDailyData(fetchData);
        };
        fetchApi();
        console.log(dailyData);
    }, [dailyData]);// eslint-disable-next-line


    const lineChart = (
        dailyData ? (<Line
            data={{
                labels: dailyData.map(({ date }) => date),
                datasets: [{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true
                }, {
                    data: dailyData.map(({ deaths }) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rbga(255,0,0,0.5)',
                    fill: true
                }]
            }}
        />) : null

    );

    return (
        <div className="root">
            {lineChart}
        </div>
    )
}

export default Chart
