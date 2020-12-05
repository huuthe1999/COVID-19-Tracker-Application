import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import { fetchCountriesData } from '../../api'
import './style.css'
const CountryPicker = ({ handleChangeCountry }) => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const fetchData = await fetchCountriesData();
            setCountries(fetchData);
        };
        fetchApi();
    }, []);

    const handleChangeCountrySelect = async (e) => {
        handleChangeCountry(e.target.value);
    }
    return (
        <FormControl className="formControl">
            <NativeSelect defaultValue='' onChange={handleChangeCountrySelect} className="select">
                <option value=''>Global</option>
                {countries && countries.map((country, index) => <option key={index} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker
