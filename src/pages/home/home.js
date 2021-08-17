import { Fragment } from "react";
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Components
import Container from "../../components/FragContainer"

const Service = ({ eKey, header, content }) => {
    return (
        <Accordion.Item eventKey={eKey}>
            <Accordion.Header>{header}</Accordion.Header>
            <Accordion.Body className="text-left" >
                <div>{content}</div>

            </Accordion.Body>
        </Accordion.Item >
    );
}

const Home = () => {
    return (
        <Fragment>
            <Container>
                <h1 className="mt-5">OneST</h1>
                <Card className="w-card">
                    <Card.Body >
                        <Card.Title>Welcome to Tracie's OneST</Card.Title>
                        <Accordion >
                            <Service eKey="0" header="Service 1: UEN Validate"
                                content="Verify Standard Identification Number Of An Entity" />
                            <Service eKey="1" header="Service 2: Weather Forecast"
                                content="View Singapore Weather Forecast For The Next 2 Hours" />
                        </Accordion>

                    </Card.Body>
                </Card>
            </Container >
        </Fragment >
    );
}

export default Home;
