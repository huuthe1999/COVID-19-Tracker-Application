import React, { useEffect, useState } from 'react'

import { Card, Chart, CountryPicker } from './components';
import { fetchData } from './api';

import './style.css';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchDataCovid() {
            const fetchedData = await fetchData();
            setData(fetchedData);
        }
        fetchDataCovid();
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="container">
            {data && <Card data={data} />}
            <Chart />
            <CountryPicker />
        </div>
    )
}

export default App
