// React Libraries
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

// Pages
import Uen_Validate from "../../pages/uen-validate/uen-validate.js";
import Weather from "../../pages/WeatherForecast/WeatherForecastPage.js";
import Home from "../../pages/home/home.js";


// Import Resources
import { NavBar, NavButton, NavDivider } from "./NavigationElements"
import { mainColor, subColor } from "../../components/Color/Color.jsx"



// Navigation Component
const Navigation = () => {
    return (
        // <Router className="router">
        //     <NavBar className="navbar">
        //         <NavButton to={`${process.env.PUBLIC_URL}/`}>Home</NavButton>
        //         <NavDivider className="divider" />
        //         <NavButton to={`${process.env.PUBLIC_URL}/uen-validate`}>Validate UEN</NavButton>
        //         <NavDivider className="divider" />
        //         <NavButton to={`${process.env.PUBLIC_URL}/weather-forecast`}>SG Weather</NavButton>
        //     </NavBar>
        //     <Switch>
        //         <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home} ></Route>
        //         <Route path={`${process.env.PUBLIC_URL}/uen-validate`} component={Uen_Validate} ></Route>
        //         <Route path={`${process.env.PUBLIC_URL}/weather-forecast`} component={Weather} ></Route>
        //     </Switch>
        // </Router>


        <Router className="router">

            <Navbar collapseOnSelect expand="lg" variant="light" style={{ backgroundColor: mainColor }}>
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                </Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav float-end" />

                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav variant="pills" defaultActiveKey={`${process.env.PUBLIC_URL}/`}>

                        <NavButton to={`${process.env.PUBLIC_URL}/`} >Home</NavButton>
                        <NavButton to={`${process.env.PUBLIC_URL}/uen-validate`} eventKey='link-1'>Validate UEN</NavButton>
                        <NavButton to={`${process.env.PUBLIC_URL}/weather-forecast`}>SG Weather</NavButton>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
            <Switch>
                <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home} ></Route>
                <Route path={`${process.env.PUBLIC_URL}/uen-validate`} component={Uen_Validate} ></Route>
                <Route path={`${process.env.PUBLIC_URL}/weather-forecast`} component={Weather} ></Route>
            </Switch>
        </Router>


    )

}

export default Navigation;