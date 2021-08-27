
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudMoon, faCloudRain, faCloudSun, faMapMarked, faMapMarker, faMapMarkerAlt, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { WiCloudy, WiDaySunny, WiNightAltPartlyCloudy, WiNightPartlyCloudy, WiRain, WiRainMix, WiShowers, WiSunrise, WiThunderstorm } from 'weather-icons-react';
import { mainColor, subColor, weatherIconColor } from "../../components/Color/Color.jsx";
import './Weather.css';

const WeatherCard = styled.div`

    background-image: linear-gradient(${subColor}, ${mainColor});
    border-radius:15px;
    box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.2);
    color:${weatherIconColor};
    margin-left:auto;
    margin-right:auto;
    margin-top: 10px;
    margin-bottom: 8px;
    padding:12px 15px;
    width:30%;


`;

// Display Icon Based On Weather Condition
const WeatherIcon = ({ forecast }) => {
    var size = "40%";
    var icon_name;
    var icon;

    if (forecast == "Fair (Day)") {
        icon_name = faSun;
    }
    else if (forecast == "Fair (Night)") {
        icon_name = faMoon;
    }
    else if (forecast == "Fair & Warm") {

    }
    else if (forecast == "Partly Cloudy (Day)") {
        icon_name = faCloudSun;
    }
    else if (forecast == "Partly Cloudy (Night)") {
        icon = <WiNightAltPartlyCloudy size={size} color={weatherIconColor} />;

    }
    else if (forecast == "Cloudy") {
        icon = <WiCloudy size={size} color={weatherIconColor} />;
    }
    else if (forecast == "Hazy") {

    }
    else if (forecast == "Slightly Hazy") {

    }
    else if (forecast == "Windy") {

    }
    else if (forecast == "Mist") {

    }
    else if (forecast == "Light Rain") {
        icon = <WiRain size={size} color={weatherIconColor} className="w-icon" />;

    }
    else if (forecast == "Moderate Rain") {
        icon = <WiRainMix size={size} color={weatherIconColor} className="w-icon" />;

    }
    else if (forecast == "Heavy Rain") {

    }
    else if (forecast == "Passing Showers") {

    }
    else if (forecast == "Light Showers") {

    }
    else if (forecast == "Showers") {
        icon = <WiShowers size={size} color={weatherIconColor} />;
    }
    else if (forecast == "Heavy Showers") {

    }
    else if (forecast == "Thundery Showers") {
        icon = <WiThunderstorm size={size} color={weatherIconColor} />;

    }
    else if (forecast == "Heavy Thundery Showers") {
        icon = <WiThunderstorm size={size} color={weatherIconColor} />;

    }
    else if (forecast == "Heavy Thundery Shower With Gusty Winds") {

    }


    var card_body = <div >{icon}<div className="card-body">{forecast}</div></div>

    return card_body;
}


const WeatherDisplay = ({ location, data }) => {


    // Date & Time
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let regexTime = '^([0-1][0-9]|[2][0-4]):[0]{2}$';

    function get_formatted_time(datetime) {
        return (datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours()) + ":" + (datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes());
    }


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

    var info, header = "";
    for (var i = 0; i < data.length; i++) {
        var start = new Date(data[i].valid_period.start);
        var end = new Date(data[i].valid_period.end);
        var startTime = get_formatted_time(start);
        var endTime = get_formatted_time(end);

        // if (startTime.match(regexTime) && endTime.match(regexTime)) {
        if (currentDate > start && currentDate < end) {
            let forecast = data[i].forecasts[location].forecast;
            var area = data[i].forecasts[location].area;

            var duration = `${get_duration_formatted(start)} - ${get_duration_formatted(end)}`;
            console.log(duration);
            var day = days[currentDate.getDay()];
            var date = get_formatted_date(currentDate);

            // Insert The Correct Forecast Icon
            info = <WeatherIcon forecast={forecast} />;
            break;
        }
        // }
    }
    return (
        <div style={{ marginBottom: '50px' }}>
            <WeatherCard>
                <h2 className="text-left">{day}</h2>
                <div className="text-left">{date}</div>
                <div className="text-left">
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> {area}
                </div>
                <div>{duration}</div>
                {info}

            </WeatherCard>
            <div className="text-end" style={{ width: '30%', margin: 'auto' }}>
                retrieved at <span id="current-time">{get_current_time()}</span>
            </div>
        </div>
    );
}

export default WeatherDisplay;