import { Fragment } from "react";
import React, { useState, useEffect } from 'react';
import './Weather.css';

// Import Components
import Container from "../../components/FragContainer";
import WeatherDisplay from "./Weather";
import { Form } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { get } from "react-hook-form";



const Weather = () => {

    // Weather Data
    const [weather, setWeather] = useState([]);

    const [error, setError] = useState({
        error: false
    });

    // Form (when selecting dropdown list)
    const [form, setForm] = useState({
        area: 0
    });

    // Singapore Locations
    const [sgLoc, setSgLoc] = useState([]);

    // Option Values Of Singapore Areas
    const location_options = sgLoc.map((location) => {
        return <option value={sgLoc.indexOf(location)} key={location.name}>{location.name}</option>
    });

    const apiKey = "https://api.data.gov.sg/v1/environment/2-hour-weather-forecast";

    // grab and display on the dropdown list
    async function getAreaLocation() {
        return await fetch(`${apiKey}?date=${getCurrentDate("-")}`)
            .then((res) => { if (res.ok) { return res.json(); } })

    }

    async function forecastData(location) {
        await fetch(`${apiKey}?date=${getCurrentDate("-")}`)
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

        if (name === "area") {
            setForm({ ...form, area: value });
        }

        // Fetch Weather Data
        forecastData(value);

    };

    useEffect(async () => {
        let mounted = true;
        await getAreaLocation().then((data) => {
            if (mounted) {
                setSgLoc(data.area_metadata);
                setError({ error: false });
            }
        })
            .catch(function () {
                console.log("useEffects Error")
                setSgLoc({ data: undefined });
                setError({ error: true });
            });;
        return () => mounted = false;
    }, []);

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
                    {weather.data !== undefined ? (
                        <div>
                            <WeatherDisplay location={form.area} data={weather.data} />
                        </div>
                    ) : null}
                    {/* Display If There Is Any Error In Data Retrieval */}
                    {error.error ? (
                        <div style={{ fontFamily: 'monospace', marginBottom: '100px', fontSize: '20px' }}>The weather forecast is currently unavailable</div>
                    ) : null}
                </div>
            </Container>
        </Fragment>
    );
}

export default Weather;
