import { formFieldInfo } from '../../data'
import { InputField } from '../../components';
import React, { useState } from "react";
import './Form.css';

function Form() {

    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [fieldInfo, setFieldInfo] = useState(formFieldInfo);
    const [isvalidate, setValidate] = useState(true);
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        validateCompanyName(companyName)
        validatePassword(password)
        validatePasswordCheker(passwordCheck);
        setAccount();

    }

    const handleChange = (event, name) => {
        switch (name) {
            case "companyName": setCompanyName(event.target.value)
                break;
            case "email": setEmail(event.target.value)
                break;
            case "password": setPassword(event.target.value)
                break;
            case "passwordCheck": setPasswordCheck(event.target.value)
                break;
        }


    }

    const validateCompanyName = (companyName) => {
        if (companyName.trim() === '') {
            console.log('company cant be empty')
            setValidate(false);
            displayError(companyName);
        }
        
    }

    const validatePassword = (password) => {
        const regularExpressionForPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
        if (!regularExpressionForPassword.test(password)) {
            setValidate(false);
        }
    }

    const setAccount = () => {
        const accountStringify = JSON.stringify({ email, companyName, password, passwordCheck });
        if (isvalidate) {
            if (localStorage.getItem(email) === null) {
                localStorage.setItem(email, accountStringify);
            }
        }
    }


    const validatePasswordCheker = (email) => {
        if (password !== passwordCheck) {
            console.log('password doesnt match');
            displayError(email);
            setValidate(false);

        }


    }

    const displayError = (name) => {
        fieldInfo.map(field => {
            field.name === name ? field.isDisplayed = true : field.isDisplayed = false;
        })

        setFieldInfo([...fieldInfo])
    }

    return (
        <>
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
                        key={item.id}
                        label={item.label}
                        name={item.name}
                        placeHolder={item.placeHolder}
                        type={item.type}
                    />

                ))

                }
                <div className="form-field">
                    <label>Choose Your City</label>
                    <select name="city" className="input-field" onChange={(event) => handleChange()}>
                        <option default className="selector-field">Choose Your City</option>
                        <option value="Jordan">Jordan</option>
                        <option value="Japan">Japan</option>
                        <option value="America">America</option>
                        <option value="Oman">Oman</option>
                    </select>
                    <div id="option-error" className="display-error">please select a City </div>
                </div>
                <div className="form-field">
                    <button type="submit" className="input-field submit-field">create account</button>
                </div>
            </form>
        </>
    );
}


export default Form;
