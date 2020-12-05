import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changeUrl = url;
    if (country) {
        changeUrl = `${url}/countries/${country}`;
    }
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeUrl);
        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }
        return modifiedData;
    } catch (error) {

    }

}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        const modifiedData = data.map(item => ({
            confirmed: item.confirmed.total,
            deaths: item.deaths.total,
            date: item.reportDate
        }))
        return modifiedData;
    } catch (error) {

    }
}

export const fetchCountriesData = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);
        return countries.map(country => country.name);
    } catch (error) {

    }
}
