// Libraries
import { Link } from "react-router-dom";
import styled from "styled-components";

// Import Resources
import { mainColor, subColor } from "../../components/Color/Color.jsx"


const media_max_width = "800px";

// Hold Icon
export const IconContainer = styled(Link)`


`;

// Icon
// background-image: url(${Icon});
export const NavIcon = styled.button`
    width: 180px;
    height:100px;
    background-repeat:no-repeat;
    background-size: cover;
   
    cursor:pointer;
    border:none;
    outline:none;
    background-color:transparent;

`;

// Navigation Bar
export const NavBar = styled.div`
	height: 28px;
	line-height: 28px;
	width: 100%;
	display: flex;
	justift-content: space-around;
	align-item: center;
	margin-left: auto;
	margin-right: auto;
	margin-top: 5px;
	margin-bottom:15px;
	border: 2px solid red;

	@media only screen and (max-width: ${media_max_width}) {
		flex-direction: column;
		justify-content: center;
		float: none;
		height: auto;
	}
`;


// Navigation Links
export const NavButton = styled(Link)`
	position: relative;
	text-decoration: none;
    text-align: center;
	color: #163F4B;
	font-size: 13px;
    font-weight: bold;
    font-family: OpenSans, Helvetica, sans-serif;
	padding: 0px 2px;
	height: 100%;
	width: 10%;


	&:hover {
		color: ${mainColor};
		text-decoration: underline;
	}

	@media only screen and (max-width: 800px) {
		display:block;
        padding:0px;
        width:100%;
	}
`;

// Horizontal Line Encasing The Navigation Bar
export const NavLine = styled.hr`
    border:none;height:4px;
    background-color: ${mainColor};
    margin-top:0px;
    margin-bottom:0px;
`;

// Vertical Line Separating Each Navigation Link
export const NavDivider = styled.div`
    margin: 7px 0px;
    height:15px;
    width:2px;
    background-color:#EDF4F6;

    @media only screen and (max-width: ${media_max_width}) {
        display:none;
    }
`;
