import { Fragment } from "react";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';


import React, { useState, useEffect, useRef } from 'react';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import styled from "styled-components";



// Import Components
import Container from "../../components/FragContainer"


// regex
function Check_UEN(uen) {

    const regexUpperCase = /^[A-Z]$/;
    const regexLocal = /^([0-1][0-9]|[2][0-4]):[0]{2}$/;
    const regexOthers = /^(T|S)$/;
    const entityTypeIndicator = [
        'LP', 'LL', 'FC', 'PF', 'RF', 'MQ', 'MM', 'NB', 'CC', 'CS', 'MB', 'FM', 'GS', 'GA', 'GB', 'DP', 'CP',
        'NR', 'CM', 'CD', 'MD', 'HS', 'VH', 'CH', 'MH', 'CL', 'XL', 'CX', 'RP', 'TU', 'TC', 'FB', 'FN', 'PA',
        'PB', 'SS', 'MC', 'SM'
    ];
    // Step 1: Check Empty
    uen = uen.trim().toUpperCase();
    if (uen !== "") {

        // Step 2: Check Length (9-10 chars)
        // let uenArr = uen.split('');
        let uenLen = uen.length;

        // Step 3: Check UEN Format
        if (uenLen == 9) {

            if (regexUpperCase.test(uen[uenLen - 1])) {
                // (A) Business With Registered ACRA (9 chars - [nnnnnnnnX])
            }

        }
        else if (uenLen == 10) {
            // (B) Local Companies Registered With ACRA (10 chars - [yyyynnnnnX])

            // (C) All Other entities which will be issued new UEN (10 chars - [TyyPQnnnnX])
        } else {

        }
    }

    return false; // uen empty
}


const ErrorMsg = ({ msg }) => {
    return (
        <Form.Control.Feedback type="invalid" className="text-left">
            {msg}
        </Form.Control.Feedback>
    );
}



const Uen_Validate = () => {

    const { register, handleSubmit, setValue, setError, formState: { errors } } = useForm({
        criteriaMode: 'all',
    });
    const uen = useRef(); // uen field
    const uenErr = useRef();

    function handleChange(e) {
        e.preventDefault();
        setValue('uen', e.target.value);
        // Validation

    };

    const onSubmit = data => {
        if (errors.uen) {
            console.log('error');
        }
        console.log(data);
    }

    return (
        <Fragment>
            <Container>
                <h1 className="mt-5">Validate UEN</h1>
                <Card className="w-card pb-5">
                    <Card.Body >
                        <Card.Title>Search UEN</Card.Title>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <InputGroup className="" style={{ width: '50%', margin: 'auto' }} hasValidation >
                                { /*required: true, minLength: 9, maxLength: 10*/}
                                <Form.Control
                                    {...register("uen", {
                                        required: "This is required",
                                        minLength: {
                                            value: 9,
                                            message: "Min 9"
                                        },
                                        maxLength: {
                                            value: 10,
                                            message: "Max 10"
                                        }
                                    })}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Please Enter UEN:"
                                    name="uen"
                                    id="uen"
                                    ref={uen}
                                    // isInvalid = {errors.uen}
                                    isInvalid='true'
                                />
                                <Button variant="outline-secondary" id="validate-btn" type="submit">
                                    Validate
                                </Button>
                                {errors.uen && errors.uen.types.required && (<ErrorMsg msg={errors.uen.types.required} />)}
                                {errors.uen && errors.uen.types.minLength && (<ErrorMsg msg={errors.uen.types.minLength} />)}
                                {errors.uen && errors.uen.types.maxLength && (<ErrorMsg msg={errors.uen.types.maxLength} />)}
                            </InputGroup>




                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </Fragment>
    );
}

export default Uen_Validate;
