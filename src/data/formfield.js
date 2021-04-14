const formFieldInfo = [{
    contentOfError: "This email already exists",
    errorClass: "display-error",
    formFieldClass: "form-field",
    id: "email-error",
    inputClass: "input-field",
    label: "Email",
    name: "email",
    placeHolder: "Email Address",
    type: "email",
    value: ""
},
{
    contentOfError: "Company name can't be empty",
    errorClass: "display-error",
    formFieldClass: "form-field",
    id: "company-error",
    inputClass: "input-field",
    label: "Company Name",
    name: "companyName",
    placeHolder: "Company Name",
    type: "text",
    value: ""
},
{
    contentOfError: "Password must contains a mix of letters, numbers &symbols",
    errorClass: "display-error",
    formFieldClass: "form-field",
    id: "password-error",
    inputClass: "input-field",
    label: "Password",
    name: "password",
    placeHolder: "Password",
    type: "password",
    value: ""
},

{
    contentOfError: "Passwords don't match",
    errorClass: "display-error",
    formFieldClass: "form-field",
    id: "password-check-error",
    inputClass: "input-field",
    label: "Confirm Password",
    name: "passwordCheck",
    placeHolder: "Confirm password",
    type: "password",
    value: ""
}

];

export default formFieldInfo;
