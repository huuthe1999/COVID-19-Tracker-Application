import React, { useEffect, useState } from 'react'

import { Card, Chart, CountryPicker } from './components';
import { fetchData } from './api';

import './style.css';

function App() {
    const [data, setData] = useState(null);
    const [country, setCountry] = useState('');

    useEffect(() => {
        async function fetchDataCovid() {
            const fetchedData = await fetchData();
            setData(fetchedData);
        }
        fetchDataCovid();
    }, []);

    const handleChangeCountry = async (country) => {
        const fetchCountry = await fetchData(country);
        setData(fetchCountry);
        setCountry(country);
    }
    return (
        <div className="container">
            {data && <Card data={data} />}
            <CountryPicker handleChangeCountry={handleChangeCountry} />
            {data && <Chart data={data} country={country} />}
        </div>
    )
}

export default App
