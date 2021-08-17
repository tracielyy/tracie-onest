import { faDotCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArrowRight, Dot } from 'react-bootstrap-icons';
import { DesignByContainer, FooterContainer } from "./FooterElements";

// Main Footer
const Footer = () => {
    return (
        <>
            <DesignByContainer><Dot/> Designed By Tracie <Dot/> 2021 <Dot/></DesignByContainer>
        </>

    );
}

export default Footer