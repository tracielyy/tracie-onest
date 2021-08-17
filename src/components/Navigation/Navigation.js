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
                <NavButton to="/">Home</NavButton>
                <NavDivider className="divider" />
                <NavButton to="/uen-validate">Uen-Validate</NavButton>
                <NavDivider className="divider" />
                <NavButton to="/weather">Weather</NavButton>
            </NavBar>
            <Switch>
                <Route path='/' exact component={Home} ></Route>
                <Route path='/uen-validate' component={Uen_Validate} ></Route>
                <Route path='/weather' component={Weather} ></Route>
            </Switch>
        </Router>
    )

}

export default Navigation;