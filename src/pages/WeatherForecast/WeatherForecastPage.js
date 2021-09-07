import { Fragment } from "react";
import React, { useState } from 'react';
import './Weather.css';

// Import Components
import Container from "../../components/FragContainer";
import WeatherDisplay from "./Weather";
import { Form } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel'



const Weather = () => {

    // Weather Data
    const [weather, setWeather] = useState([]);

    const [error, setError] = useState({
        error: false
    });

    // Form
    const [form, setForm] = useState({
        area: 0
    });

    // Singapore Locations
    const sg_loc = [
        'Ang Mo Kio', 'Bedok', 'Bishan', 'Boon Lay', 'Bukit Batok', 'Bukit Merah', 'Bukit Panjang', 'Bukit Timah',
        'Central Water Catchment', 'Changi', 'Choa Chu Kang', 'Clementi', 'City', 'Geylang', 'Hougang', 'Jalan Bahar',
        'Jurong East', 'Jurong Island', 'Jurong West', 'Kallang', 'Lim Chu Kang', 'Mandai', 'Marine Parade', 'Novena',
        'Pasir Ris', 'Paya Lebar', 'Pioneer', 'Pulau Tekon', 'Pulau Ubin', 'Punggol', 'Queenstown', 'Seletar',
        'Sembawang', 'Sengkang', 'Sentosa', 'Serangoon', 'Southern Islands', 'Sungei Kadut', 'Tampines', 'Tanglin',
        'Tengah', 'Toa Payoh', 'Tuas', 'Western Islands', 'Western Water Catchment', 'Woodlands', 'Yishun'
    ];

    // Option Values Of Singapore Areas
    const location_options = sg_loc.map((location) =>
        <option value={sg_loc.indexOf(location)} key={location}>{location}</option>
    );


    const apiKey = "https://api.data.gov.sg/v1/environment/2-hour-weather-forecast";
    async function forecastData(location) {
        const data = await fetch(`${apiKey}?date=${getCurrentDate("-")}`)
            .then((res) => { if (res.ok) { return res.json(); } })
            .then((data) => {
                setWeather({ data: data.items });
                setError({ error: false });
            })
            .catch(function () {
                setWeather({ data: undefined });
                setError({ error: true });
            });


    }

    // Retrieval Of Current Date (e.g. 2021-08-16)
    function getCurrentDate(separator = '') {
        let currentDate = new Date();
        let date = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();
        return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date < 10 ? `0${date}` : `${date}`}`;
    }

    // On Change Set The Data
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if (name == "area") {
            setForm({ ...form, area: value });
        }

        // Fetch Weather Data
        forecastData(value);

    };

    return (
        <Fragment>
            <Container>
                <h1 className="mt-5">Singapore Weather Forecast</h1>
                <div className="weather">
                    <form>
                        {/* Dropdown to select area */}
                        <Form.Group style={{ width: '50%', margin: '50px auto' }}>
                            <FloatingLabel controlId="floatingSelect" label="Please Select An Area">
                                <Form.Select
                                    name="area"
                                    className="col-3"
                                    id="area-select"
                                    onChange={(element) => handleChange(element)}
                                >
                                    <option hidden></option>
                                    {location_options}
                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>
                    </form>
                    {/* Display Weather Data */}
                    {weather.data != undefined ? (
                        <div>
                            <WeatherDisplay location={form.area} data={weather.data} />
                        </div>
                    ) : null}
                    {/* Display If There Is Any Error In Data Retrieval */}
                    {error.error ? (
                        <div style={{ fontFamily: 'monospace', marginBottom: '100px', fontSize:'20px' }}>The weather forecast is currently unavailable</div>
                    ) : null}
                </div>
            </Container>
        </Fragment>
    );
}

export default Weather;
