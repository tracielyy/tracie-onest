import { Fragment } from "react";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Alert from 'react-bootstrap/Alert'
import 'bootstrap/dist/css/bootstrap.min.css';


import React, { useState, useRef } from 'react';
import { useForm } from "react-hook-form";

// Import Components
import Container from "../../components/FragContainer"


const ErrorMsg = ({ msg }) => {
    return (
        <Form.Control.Feedback type="invalid" className="text-left">
            {msg}
        </Form.Control.Feedback>
    );
}

const SuccessAlert = ({ msg }) => {
    return (
        <Alert variant="success" >{msg}</Alert>
    );
}

const Uen_Validate = () => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        criteriaMode: 'all', // For err messages
    });
    const uen = useRef(); // uen field
    const [uenErr, setUenErr] = useState(null);
    const [uenSuccess, setUenSuccess] = useState(null);

    // regex
    function Check_UEN(uen) {

        const regexBizReg = /^[0-9]{8}[A-Z]$/;
        const regexLocal = /^(1|2)[0-9]{3}[0-9]{5}[A-Z]$/;
        const regexOthers = /^(T|S)[0-9]{2}[A-Z]{2}[0-9]{4}[A-Z]$/;

        const entityTypeIndicator = [
            'LP', 'LL', 'FC', 'PF', 'RF', 'MQ', 'MM', 'NB', 'CC', 'CS', 'MB', 'FM', 'GS', 'GA', 'GB', 'DP', 'CP',
            'NR', 'CM', 'CD', 'MD', 'HS', 'VH', 'CH', 'MH', 'CL', 'XL', 'CX', 'RP', 'TU', 'TC', 'FB', 'FN', 'PA',
            'PB', 'SS', 'MC', 'SM'
        ];
        
        let ok = false;
        // Step 1: Check Empty
        uen = uen.trim().toUpperCase();
        if (uen !== "") {

            // Step 2: Check Length (9-10 chars)
            let uenLen = uen.length;

            // Step 3: Check UEN Format
            if (uenLen === 9) {

                if (regexBizReg.test(uen)) {

                    // (A) Business Registered With ACRA (9 chars - [nnnnnnnnX])
                    setUenSuccess('Valid format: Business registered with ACRA');
                    ok = true;

                }

            }
            else if (uenLen === 10) {

                if (regexLocal.test(uen)) {

                    // (B) Local Companies Registered With ACRA (10 chars - [yyyynnnnnX])
                    setUenSuccess('Valid format: Local companies registered with ACRA');
                    ok = true;

                } else if (regexOthers.test(uen)) {

                    for (let eti in entityTypeIndicator) {
                        if (uen.substring(3, 5) === entityTypeIndicator[eti]) {

                            // (C) All Other entities which will be issued new UEN (10 chars - [TyyPQnnnnX])
                            setUenSuccess('Valid format: Other entities with new UEN.');
                            ok = true;
                            break;

                        }
                    }

                }
            }
        }
        if (!ok) {
            setUenErr('Invalid UEN format');
        }
    }



    function handleChange(e) {
        e.preventDefault();
        setValue('uen', e.target.value);

    };

    function display_msg_reset() {
        setUenErr(null);
        setUenSuccess(null);
    }

    const onSubmit = data => {
        display_msg_reset();
        Check_UEN(data.uen);
    }

    const onError = () => {
        display_msg_reset();
    }

    return (
        <Fragment>
            <Container>
                <h1 className="mt-5">Validate UEN</h1>
                <Card className="w-card pb-5">
                    <Card.Body >
                        <Card.Title>Search UEN</Card.Title>
                        <Form onSubmit={handleSubmit(onSubmit, onError)}>
                            <InputGroup className="" style={{ width: '50%', margin: 'auto' }} hasValidation >
                                <Form.Control
                                    {...register("uen", {
                                        required: "Required",
                                        minLength: {
                                            value: 9,
                                            message: "Minimum 9 characters"
                                        },
                                        maxLength: {
                                            value: 10,
                                            message: "Maximum 10 characters"
                                        }
                                    })}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Please Enter UEN:"
                                    name="uen"
                                    id="uen"
                                    ref={uen}
                                    isInvalid={errors.uen || uenErr !== null}
                                    isValid={uenSuccess}
                                />
                                <Button variant="outline-secondary" id="validate-btn" type="submit" >
                                    Validate
                                </Button>
                                {errors.uen && errors.uen.types.required && (<ErrorMsg msg={errors.uen.types.required} />)}
                                {errors.uen && errors.uen.types.minLength && (<ErrorMsg msg={errors.uen.types.minLength} />)}
                                {errors.uen && errors.uen.types.maxLength && (<ErrorMsg msg={errors.uen.types.maxLength} />)}
                                {(<ErrorMsg msg={uenErr} />)}
                            </InputGroup>
                            <div style={{ width: '50%', margin: '15px auto' }}>
                                {!errors.uen && uenSuccess !== null && (<SuccessAlert msg={uenSuccess} />)}
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </Fragment>
    );
}

export default Uen_Validate;
