import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import { Form, Formik } from "formik";
import InputField from "../components/InputField";
import Wrapper from "../components/Wrapper";
import { useRegisterMutation } from "../generated/graphql";


const Register = ({}) => {
    const [{error}, register] = useRegisterMutation()
    return (
        <Wrapper size='small'>
            <Formik
                initialValues={{ username: "", password: "", email: "" }}
                onSubmit={values => {
                    return register(values)
                }}>
                {({ isSubmitting }) => (
                    <Form>
                        <InputField
                            label='Username'
                            name='username'
                            placeholder='Username'
                        />
                        <InputField
                            label='Email'
                            name='email'
                            placeholder='Email'
                            type='email'
                        />

                        <InputField
                            label='Password'
                            name='password'
                            placeholder='Password'
                            type='password'
                        />
                        <Flex ml='auto' h='100%'>
                            <Button
                                mt={4}
                                colorScheme='teal'
                                isLoading={isSubmitting}
                                type='submit'>
                                Submit
                            </Button>
                        </Flex>
                    </Form>
                )}
            </Formik>
        </Wrapper>
    );
};

export default Register;
