import {
    FormControl,
    FormErrorMessage,
    FormLabel,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { useField } from "formik";
import React, { InputHTMLAttributes } from "react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    name: string;
    label: string;
    placeholder: string;
    type?: string;
};

const InputField: React.FC<InputFieldProps> = props => {
    const [field, { error }] = useField(props);
    return (
        <FormControl isInvalid={!!error}>
            <FormLabel htmlFor={field.name}>{props.label}</FormLabel>
            <Input
                {...field}
                id={field.name}
                placeholder={props.placeholder}
                type={props.type ? props.type : null}
            />
            {error && <FormErrorMessage>{error}</FormErrorMessage>}
        </FormControl>
    );
};

export default InputField;
