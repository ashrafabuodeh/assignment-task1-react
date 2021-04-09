const formFieldInfo = [{
        formFieldClass: "form-field",
        label: "Email",
        type: "email",
        inputClass: "input-field",
        name: "email",
        placeHolder: "Email Address",
        id: "email-error",
        errorClass: "display-error",
        contentOfError: "This email already exists",
    },
    {
        formFieldClass: "form-field",
        label: "Company Name",
        type: "text",
        inputClass: "input-field",
        name: "companyName",
        placeHolder: "Company Name",
        id: "company-error",
        errorClass: "display-error",
        contentOfError: "Company name can't be empty",
    },
    {
        formFieldClass: "form-field",
        label: "Password",
        type: "password",
        inputClass: "input-field",
        name: "password",
        placeHolder: "Password",
        id: "password-error",
        errorClass: "display-error",
        contentOfError: "Password must contains a mix of letters, numbers &symbols",
    },

    {
        formFieldClass: "form-field",
        label: "Confirm Password",
        type: "password",
        inputClass: "input-field",
        name: "passwordCheck",
        placeHolder: "Confirm password",
        id: "password-check-error",
        errorClass: "display-error",
        contentOfError: "Passwords don't match",
    },

];

export default formFieldInfo;
