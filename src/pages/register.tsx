import {
    FormControl,
    FormErrorMessage,
    FormLabel,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Field, Form, Formik } from "formik";
import React from "react";
import InputField from "../components/InputField";
import Wrapper from "../components/Wrapper";
// import React from "react";
// import React from "react";

interface registerProps {}

const Register = ({}) => {
    return (
        <Wrapper size='small'>
            <Formik
                initialValues={{ username: "", password: "", email: "" }}
                onSubmit={values => {
                    console.log(values);
                }}>
                {({ values, handleChange }) => (
                    <Form>
                        <InputField
                            label='Username'
                            name='username'
                            placeholder='Username'
                        />

                        <InputField
                            label='Password'
                            name='password'
                            placeholder='Password'
                            type="password"
                        />
                    </Form>
                )}
            </Formik>
        </Wrapper>
    );
};

export default Register;
