import { Fragment } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Components
import Container from "../../components/FragContainer"
import { ArrowRight } from "react-bootstrap-icons";

const Service = ({ eKey, header, contents }) => {
    let count = 0;
    return (
        <Accordion.Item eventKey={eKey}>
            <Accordion.Header>{header}</Accordion.Header>
            <Accordion.Body className="text-left" >
                <>
                    {contents.map(content => (
                        <div className="content" key={count++}><ArrowRight /> {content.main}
                            {content.url ? <a href={content.url}>here</a> : null}.
                        </div>
                    ))}
                </>
            </Accordion.Body>
        </Accordion.Item >
    );
}

const Home = () => {

    // Service 1
    let service1_content = [
        { main: 'Verify standard identification number of an entity' },
        { main: 'Make sure that the UEN provided comply with the correct format' },
        { main: 'There are valid formats: (A) Business registered with ACRA, (B) Local companies with ACRA, (C) All other entities with new UEN' },
        { main: 'For more information please refer to ', url: 'https://www.uen.gov.sg/ueninternet/faces/pages/admin/aboutUEN.jspx' }
    ];

    // Service 2
    let service2_content = [
        { main: 'View Singapore weather forecast for the next 2 hours' },
        { main: 'Users is able to choose a valid location in Singapore to know its weather forecast' }
    ];


    return (
        <Fragment>
            <Container>
                <h1 className="mt-5 mb-3">OneST</h1>

                <h4 className="mb-3">Welcome to Tracie's OneST</h4>
                <Accordion style={{ boxShadow: '1px 3px 10px rgba(0, 0, 0, 0.2)' }}>
                    <Service eKey="0" header="Service 1: UEN Validate"
                        contents={service1_content} />
                    <Service eKey="1" header="Service 2: Weather Forecast"
                        contents={service2_content} />
                </Accordion>

            </Container >
        </Fragment >
    );
}

export default Home;
