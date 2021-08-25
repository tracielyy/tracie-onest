import { Fragment } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Components
import Container from "../../components/FragContainer"
import { ArrowRight } from "react-bootstrap-icons";

const Service = ({ eKey, header, content }) => {
    var content_txt = [];
    for (let i in content) {
        content_txt.push(<div><ArrowRight /> {content[i]}</div>);
    }

    return (
        <Accordion.Item eventKey={eKey}>
            <Accordion.Header>{header}</Accordion.Header>
            <Accordion.Body className="text-left" >
                <div>
                    {content_txt}
                </div>
            </Accordion.Body>
        </Accordion.Item >
    );
}

const Home = () => {

    // Service 1
    let service1_content = [];
    service1_content.push("Verify standard identification number of an entity.");
    service1_content.push("Make sure that the UEN provided comply with the correct format.");

    // Service 2
    let service2_content = [];
    service2_content.push('View Singapore weather forecast for the next 2 hours.');
    service2_content.push('Users is able to choose a valid location in Singapore to know its weather forecast.');


    return (
        <Fragment>
            <Container>
                <h1 className="mt-5">OneST</h1>
                <Card className="w-card">
                    <Card.Body >
                        <Card.Title>Welcome to Tracie's OneST</Card.Title>
                        <Accordion >
                            <Service eKey="0" header="Service 1: UEN Validate"
                                content={service1_content} />
                            <Service eKey="1" header="Service 2: Weather Forecast"
                                content={service2_content} />
                        </Accordion>
                    </Card.Body>
                </Card>
            </Container >
        </Fragment >
    );
}

export default Home;
