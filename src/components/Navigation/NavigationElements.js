// Libraries
import { Link } from "react-router-dom";
import styled from "styled-components";

// Import Resources
import { mainColor, subColor } from "../../components/Color/Color.jsx"


const media_max_width = "800px";


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
	height: 100%;
	line-height: 100%;
	width: 100%;
	display: flex;
	justift-content: space-around;
	align-item: center;
	margin-left: auto;
	margin-right: auto;
	padding:0;
	background-color:${mainColor};

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
	color: white;
	font-size: 15px;
    font-weight: bold;
    font-family: OpenSans, Helvetica, sans-serif;
	padding: 15px 0px;
	height: 100%;
	line-height: 100%;
	width: 33%;


	&:hover {
		color: white;
		text-decoration: underline;
		background-color:${subColor};
	
	}


	@media only screen and (max-width: 800px) {
		display:block;
		padding: 10px 5px;
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
    margin: 0;
    height:15px;
    width:2px;
	padding:0;
    background-color:${subColor};

    @media only screen and (max-width: ${media_max_width}) {
        display:none;
    }
`;
