
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import {
    WiCloudy, WiCloudyGusts, WiDayCloudy, WiDaySunny, WiDaySunnyOvercast, WiNightAltPartlyCloudy, WiNightClear,
    WiRain, WiRaindrop, WiRaindrops, WiRainMix, WiRainWind, WiShowers, WiSmog, WiSmoke,
    WiSprinkle, WiStormShowers, WiStrongWind, WiThunderstorm, WiWindy
} from 'weather-icons-react';
import { mainColor, subColor, weatherIconColor } from "../../components/Color/Color.jsx";
import './Weather.css';

const WeatherCard = styled.div`

    background-image: linear-gradient(${subColor}, ${mainColor});
    border-radius: 15px;
    box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.2);
    color:${weatherIconColor};
    margin-left:auto;
    margin-right:auto;
    margin-top: 0px;
    margin-bottom: 8px;
    padding:12px 15px;
    width:35%;


`;



// Display Icon Based On Weather Condition
const WeatherIcon = ({ forecast }) => {
    var size = "40%";
    var icon;

    if (forecast === "Fair (Day)") {
        icon = <WiDaySunnyOvercast size={size} color={weatherIconColor} className="w-icon" /> /* Fair (Day) */
    }
    else if (forecast === "Fair (Night)") {
        icon = <WiNightClear size={size} color={weatherIconColor} /> /* Fair (Night) */
    }
    else if (forecast === "Fair & Warm") {
        icon = <WiDaySunny size={size} color={weatherIconColor} className="w-icon" /> /* Fair & Warm */
    }
    else if (forecast === "Partly Cloudy (Day)") {
        icon = <WiDayCloudy size={size} color={weatherIconColor} className="w-icon" /> /* Partly Cloudy (Day) */
    }
    else if (forecast === "Partly Cloudy (Night)") {
        icon = <WiNightAltPartlyCloudy size={size} color={weatherIconColor} className="w-icon" />; /* Partly Cloudy (Night) */
    }
    else if (forecast === "Cloudy") {
        icon = <WiCloudy size={size} color={weatherIconColor} className="w-icon" /> /* Cloudy */
    }
    else if (forecast === "Hazy") {
        icon = <WiSmog size={size} color={weatherIconColor} className="w-icon" /> /* Hazy */
    }
    else if (forecast === "Slightly Hazy") {
        icon = <WiSmoke size={size} color={weatherIconColor} className="w-icon" /> /* Slightly Hazy */
    }
    else if (forecast === "Windy") {
        icon = <WiCloudyGusts size={size} color={weatherIconColor} className="w-icon" /> /* Windy */
    }
    else if (forecast === "Mist") {
        icon = <WiWindy size={size} color={weatherIconColor} className="w-icon" /> /* Mist */
    }
    else if (forecast === "Light Rain") {
        icon = <WiSprinkle size={size} color={weatherIconColor} className="w-icon" /> /* Light Rain */
    }
    else if (forecast === "Moderate Rain") {
        icon = <WiRain size={size} color={weatherIconColor} className="w-icon" /> /* Moderate Rain */
    }
    else if (forecast === "Heavy Rain") {
        icon = <WiRainWind size={size} color={weatherIconColor} className="w-icon" /> /* Heavy Rain */
    }
    else if (forecast === "Passing Showers") {
        icon = <WiRaindrops size={size} color={weatherIconColor} className="w-icon" /> /* Passing Showers */
    }
    else if (forecast === "Light Showers") {
        icon = <WiRaindrop size={size} color={weatherIconColor} className="w-icon" /> /* Light Shower */
    }
    else if (forecast === "Showers") {
        icon = <WiShowers size={size} color={weatherIconColor} className="w-icon" /> /* Showers */
    }
    else if (forecast === "Heavy Showers") {
        icon = <WiRainMix size={size} color={weatherIconColor} className="w-icon" /> /* Heavy Showers */
    }
    else if (forecast === "Thundery Showers") {
        icon = <WiStormShowers size={size} color={weatherIconColor} className="w-icon" /> /* Thundery Shower */
    }
    else if (forecast === "Heavy Thundery Showers") {
        icon = <WiThunderstorm size={size} color={weatherIconColor} className="w-icon" /> /* Heavy Thundery Shower */
    }
    else if (forecast === "Heavy Thundery Shower With Gusty Winds") {
        icon = <><WiThunderstorm size={size} color={weatherIconColor} className="w-icon" />
            <WiStrongWind size={'20%'} color={weatherIconColor} className="w-icon" /></>

    }


    var card_body = <div >{icon}<div className="card-body">{forecast}</div></div>

    return card_body;
}


const WeatherDisplay = ({ location, data }) => {


    // Date & Time
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let regexTime = '^([0-1][0-9]|[2][0-4]):[0]{2}$';

/*     function get_formatted_time(datetime) {
        return (datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours()) + ":" + (datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes());
    } */


    function get_current_time() {
        let currentDate = new Date();
        let hour = currentDate.getHours();
        let min = currentDate.getMinutes();
        return `${hour}:${min < 10 ? `0${min}` : `${min}`}`;
    }

    function get_formatted_date(datetime) {
        let yr = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(datetime);
        let mth = new Intl.DateTimeFormat('en', { month: 'short' }).format(datetime);
        let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(datetime);
        return `${day} ${mth} ${yr}`;
    }

    function get_duration_formatted(datetime) {
        let options = { hour: "2-digit", minute: "2-digit" };
        return (new Intl.DateTimeFormat('en', options).format(datetime));
    }

    var currentDate = new Date();

    for (var i = 0; i < data.length; i++) {
        let start = new Date(data[i].valid_period.start);
        let end = new Date(data[i].valid_period.end);
        /*         var startTime = get_formatted_time(start);
                var endTime = get_formatted_time(end); */

        // if (startTime.match(regexTime) && endTime.match(regexTime)) {
        if (currentDate > start && currentDate < end && i === data.length - 1) {
            var forecast = data[i].forecasts[location].forecast;
            var area = data[i].forecasts[location].area;

            var duration = `${get_duration_formatted(start)} - ${get_duration_formatted(end)}`;
            console.log(duration);
            var day = days[currentDate.getDay()];
            var date = get_formatted_date(currentDate);

            break;
        }
        // }
    }
    return (
        <div style={{ marginBottom: '50px', padding: '0px' }}>
            <WeatherCard>
                <h4 className="text-left">
                    <FontAwesomeIcon icon={faMapMarkerAlt} size='1x' /> {area}
                </h4>
                <div className="text-left">{day}</div>
                <div className="text-left">{date}</div>


                {/* Display Weather Icon */}
                <WeatherIcon forecast={forecast} />
                <div className="text-end fw-light font-monospace" style={{ marginTop: '30px' }}>
                    {duration}
                </div>
                <hr style={{ marginBottom: '2px' }} />
                <div className="text-end fw-light" style={{ marginTop: '0px', fontSize: '14px' }}>
                    retrieved at {get_current_time()}
                </div>
            </WeatherCard>
        </div>
    );
}

export default WeatherDisplay;