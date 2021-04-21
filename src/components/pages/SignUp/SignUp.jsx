import { Button, InputField, SelectTag } from "../../../components";
import { formFieldInfo } from "../../../data";
import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./SignUp.css";

function SignUp() {
    const [userData, setUserData] = useState({
        city: "",
        companyName: "",
        email: "",
        image: "",
        password: "",
        passwordCheck: "",
    });
    const [validCity, setValidCity] = useState(false);
    const [validCompanyName, setValidCompanyName] = useState(false);
    const [validPassword, setValidPassword] = useState(false);
    const [validPasswordChecker, setValidPasswordChecker] = useState(false);
    const history = useHistory();

    useEffect(() => {
        validateCity(userData["city"]);
        validateCompanyName(userData["companyName"]);
        validateEmail(userData["email"]);
        validatePassword(userData["password"]);
        validatePasswordCheker(userData["password"], userData["passwordCheck"]);
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        setAccount();
    };

    const handleChange = (name, value) => {
        setUserData({ ...userData, [name]: value });
    };

    const validateCompanyName = (companyName) => {
        if (companyName.trim() === "") {
            setValidCompanyName(false);
            displayError(true, 1);
        } else {
            displayError(false, 1);
            setValidCompanyName(true);
        }
    };

    const validateEmail = (email) => {
        if (localStorage.getItem(userData["email"]) === null) {
            displayError(false, 0);
            return true;
        } else {
            displayError(true, 0);
            return false;
        }
    };

    const validatePassword = (password) => {
        const regularExpressionForPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
        if (!regularExpressionForPassword.test(password)) {
            displayError(true, 2);
            setValidPassword(false);
        } else {
            displayError(false, 2);
            setValidPassword(true);
        }
    };

    const setAccount = () => {
        const accountStringify = JSON.stringify(userData);
        const check =
            validCity && validCompanyName && validPassword && validPasswordChecker;

        if (check) {
            if (validateEmail) {
                localStorage.setItem(userData["email"], accountStringify);
                history.push("/login");
            } else {
                displayError(true, 0);
            }
        }
    };

    const validatePasswordCheker = (password, passwordCheck) => {
        if (password !== passwordCheck) {
            displayError(true, 3);
            setValidPasswordChecker(passwordCheck);
        } else {
            displayError(false, 3);
            setValidPasswordChecker(true);
        }
    };

    const validateCity = (city) => {
        if (city === "Choose Your City" || city === "") {
            setValidCity(false);
        } else {
            setValidCity(true);
        }
    };

    const displayError = (value, id) => {
        formFieldInfo[id].isDisplayed = value;
    };

    return (
        <>
            <h1 className="title">Create Account</h1>
            <form onSubmit={handleSubmit} name="form">
                {formFieldInfo.map((item) => (
                    <InputField
                        contentOfError={item.contentOfError}
                        errorClass={item.errorClass}
                        formFieldClass={item.formFieldClass}
                        handleInputChange={handleChange}
                        id={item.id}
                        inputClass={item.inputClass}
                        isDisplayed={item.isDisplayed}
                        isRequired={item.isRequired}
                        key={item.id}
                        label={item.label}
                        name={item.name}
                        placeHolder={item.placeHolder}
                        type={item.type}
                    />
                ))}
                <SelectTag
                    handleInputChange={handleChange}
                    name="city"
                    onSubmit={handleSubmit}
                />
                <Button label={"CREATE ACCOUNT"} />
            </form>
            <a href="/login">Go to Log In Page</a>
        </>
    );
}

export default SignUp;
