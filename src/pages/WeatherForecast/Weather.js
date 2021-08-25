
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudMoon, faCloudRain, faCloudSun, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { WiCloudy, WiDaySunny, WiNightAltPartlyCloudy, WiNightPartlyCloudy, WiRain, WiRainMix, WiShowers, WiSunrise, WiThunderstorm } from 'weather-icons-react';
import { mainColor, subColor, weatherIconColor } from "../../components/Color/Color.jsx";
import './Weather.css';

const WeatherCard = styled.div`
    width:30%;
    margin-left:auto;
    margin-right:auto;
    margin-top: 10px;
    margin-bottom: 10px;
`;

// Display Icon Based On Weather Condition
const WeatherIcon = ({ forecast }) => {
    var size = "40%";
    if (forecast == "Fair (Day)") {
        var icon_name = faSun;
    }
    else if (forecast == "Fair (Night)") {
        var icon_name = faMoon;
    }
    else if (forecast == "Fair & Warm") {

    }
    else if (forecast == "Partly Cloudy (Day)") {
        var icon_name = faCloudSun;
    }
    else if (forecast == "Partly Cloudy (Night)") {
        var icon = <WiNightAltPartlyCloudy size={size} color={weatherIconColor}  />;
    }
    else if (forecast == "Cloudy") {
        var icon = <WiCloudy size={size} color={weatherIconColor}  />;
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
        var icon = <WiRain size={size} color={weatherIconColor} className="w-icon" />;

    }
    else if (forecast == "Moderate Rain") {
        var icon = <WiRainMix size={size} color={weatherIconColor} className="w-icon" />;

    }
    else if (forecast == "Heavy Rain") {

    }
    else if (forecast == "Passing Showers") {

    }
    else if (forecast == "Light Showers") {

    }
    else if (forecast == "Showers") {
        var icon = <WiShowers size={size} color={weatherIconColor} />;
    }
    else if (forecast == "Heavy Showers") {

    }
    else if (forecast == "Thundery Showers") {
        var icon = <WiThunderstorm size={size} color={weatherIconColor} />;

    }
    else if (forecast == "Heavy Thundery Showers") {
        var icon = <WiThunderstorm size={size} color={weatherIconColor} />;

    }
    else if (forecast == "Heavy Thundery Shower With Gusty Winds") {

    }


    var card_body = <div className="">{icon}<div className="card-body">{forecast}</div></div>

    return card_body;
}


const WeatherDisplay = ({ location, data }) => {
    let regexTime = '^([0-1][0-9]|[2][0-4]):[0]{2}$';

    // Date & Time
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];




    var currentDate = new Date();
    console.log(location);
    var info, header = "";
    for (var i = 0; i < data.length; i++) {
        var start = new Date(data[i].valid_period.start);
        var end = new Date(data[i].valid_period.end);
        var startTime = (start.getHours() < 10 ? "0" + start.getHours() : start.getHours()) + ":" + (start.getMinutes() < 10 ? "0" + start.getMinutes() : start.getMinutes());
        var endTime = (end.getHours() < 10 ? "0" + end.getHours() : end.getHours()) + ":" + (end.getMinutes() < 10 ? "0" + end.getMinutes() : end.getMinutes());

        if (startTime.match(regexTime) && endTime.match(regexTime)) {
            if (currentDate > start && currentDate < end) {
                var forecast = data[i].forecasts[location].forecast;
                console.log(startTime + " to " + endTime);
                var day = days[currentDate.getDay()];
                header = <div class="card-header">{day}</div>

                info = <WeatherIcon forecast={forecast} />;
                break;
            }
        }
    }
    return (<WeatherCard className="card w-card">{header}{info}</WeatherCard>);
}

export default WeatherDisplay;