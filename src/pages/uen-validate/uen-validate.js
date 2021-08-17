import { Fragment } from "react";


// Import Components
import Container from "../../components/FragContainer"

function Check_UEN(){
    
}


const Uen_Validate = () => {
    return (
        <Fragment>
            <Container>
                <h1>Validate UEN</h1>
                <div>Search UEN</div>
                <input type='text' placeholder='uen'/>
            </Container>
        </Fragment>
    );
}

export default Uen_Validate;
