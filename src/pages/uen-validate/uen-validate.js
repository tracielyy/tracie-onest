import { Fragment } from "react";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'


// Import Components
import Container from "../../components/FragContainer"


// regex
function Check_UEN() {

}


const Uen_Validate = () => {
    return (
        <Fragment>
            <Container>
                <h1 className="mt-5">Validate UEN</h1>
                <Card className="w-card">
                    <Card.Body >
                        <Card.Title>Search UEN</Card.Title>
                        <Form>
                            <Form.Control type="text" placeholder="Please Enter UEN:" name="uen" style={{ width: '50%', margin: 'auto' }} />
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </Fragment>
    );
}

export default Uen_Validate;
