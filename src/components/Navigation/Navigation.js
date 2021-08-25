// React Libraries
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// Pages
import Uen_Validate from "../../pages/uen-validate/uen-validate.js";
import Weather from "../../pages/WeatherForecast/WeatherForecastPage.js";
import Home from "../../pages/home/home.js";


// Import Resources
import { NavBar, NavButton, NavDivider } from "./NavigationElements"



// Navigation Component
const Navigation = () => {
    return (
        <Router className="router">
            <NavBar className="navbar">
                <NavButton to={`${process.env.PUBLIC_URL}/`}>Home</NavButton>
                <NavDivider className="divider" />
                <NavButton to={`${process.env.PUBLIC_URL}/uen-validate`}>Validate UEN</NavButton>
                <NavDivider className="divider" />
                <NavButton to={`${process.env.PUBLIC_URL}/weather-forecast`}>SG Weather</NavButton>
            </NavBar>
            <Switch>
                <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home} ></Route>
                <Route path={`${process.env.PUBLIC_URL}/uen-validate`} component={Uen_Validate} ></Route>
                <Route path={`${process.env.PUBLIC_URL}/weather-forecast`} component={Weather} ></Route>
            </Switch>
        </Router>
    )

}

export default Navigation;