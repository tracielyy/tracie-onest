import { Fragment } from "react";
import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import './Weather.css';

// Import Components
import Container from "../../components/FragContainer";
import WeatherDisplay from "./Weather";
import { Form } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel'


const Weather = () => {
    // Current Date
    const currentDate = new Date();

    // Weather Data
    const [weather, setWeather] = useState([]);

    const [time, setTime] = useState({
        time: ""
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
            .then((res) => res.json())
            .then((data) => data);

        setWeather({ data: data.items });

    }

    // Retrieval Of Current Date (e.g. 2021-08-16)
    function getCurrentDate(separator = '') {
        let currentDate = new Date();
        let date = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();
        return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`;
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

        // // Set Current Retrieval Time
        // setTime({ ...time, time: getCurrentTime() });

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

                    {/* {console.log(new Date('2021-08-16T00:30:00+08:00'))} */}
                    {/* {console.log(new Date())} */}

                    {weather.data != undefined ? (
                        <div>
                            <WeatherDisplay location={form.area} data={weather.data} style={{ margin: '30px' }} />
                        </div>
                    ) : null}
                </div>
            </Container>
        </Fragment>
    );
}

export default Weather;
