import { useState, useEffect } from "react";

const useForm = (callback, validate) => {

    const [values, setValues] = useState({email: "", password: "", password1:"", phone:"", Address:"", ps:"", city:"", pro:""});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = event =>{
        const {name, value} = event.target;
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        //handling errors
        setErrors(validate(values));
        setIsSubmitting(true);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting){
            callback();
        }
        //call the callback
    }, [errors]);

    return{
        handleChange,
        handleSubmit,
        values,
        errors
    };
};

export default useForm;