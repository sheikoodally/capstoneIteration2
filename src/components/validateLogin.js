export default function validate(values){
    let errors = {};

    if(!values.email){
        errors.email = "*Email address is required";
    } else if (!/[^@]+@[^\.]+\..+/.test(values.email)) {
        errors.email = "Email address is invalid";
    }
    if(!values.password){
        errors.password = "*Password is required";
    } else if (values.password.length < 10) {
        errors.password = "Password need to have more than 10 characters";
    }
    if(!values.password1){
        errors.password1 = "*Please re-enter password";
    } else if (values.password1 != values.password) {
        errors.password = "Please enter the correct password";
    }

    if(!values.phone){
        errors.phone = "*Please enter phone number";
    }
    else if(!/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/.test(values.phone)){
        errors.phone = "Phone is invalid";
    }

    if(!values.address){
        errors.address = "*Please enter address";
    }
    else if(!/^\d+\s[A-z]+\s[A-z]+/.test(values.address)){
        errors.address = "Address is invalid";
    }

    if(!values.ps){
        errors.ps = "*Please enter Postalcode";
    }
    else if(!/^[a-zA-Z]{1}[0-9]{1}[a-zA-Z]{1}[- ]{0,1}[0-9]{1}[a-zA-Z]{1}[0-9]{1}/.test(values.ps)){
        errors.ps = "Postal code is invalid";
    }

    if(!values.city){
        errors.city = "*Please enter City";
    }
    else if(!/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/.test(values.city)){
        errors.city = "City is invalid";
    }

    if(!values.pro){
        errors.pro = "*Please enter Province";
    }
    else if(!/^(N[BLSTU]|[AMN]B|[BQ]C|ON|PE|SK)$/.test(values.pro)){
        errors.pro = "Province is invalid";
    }

    return errors;
}