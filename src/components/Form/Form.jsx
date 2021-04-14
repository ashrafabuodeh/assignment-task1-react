import { formFieldInfo } from '../../data'
import { InputField } from '../../components';
import React, { useState } from "react";
import './Form.css';

function Form() {

    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [isvalidate, setValidate] = useState(true);
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        validateCompanyName(companyName)
        validatePassword(password)
        validatePasswordCheker(passwordCheck);
        setAccount();
        console.log(isvalidate)
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
            console.log('company name is empty');
            setValidate(false);
        }
    }

    const validatePassword = (password) => {
        const regularExpressionForPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
        if (!regularExpressionForPassword.test(password)) {
            console.log('password is error');
            setValidate(false);
        }

    }

    const setAccount = () => {
        const accountStringify = JSON.stringify({ email, companyName, password, passwordCheck });
        if (isvalidate)
            if (localStorage.getItem(email) === null) {
                localStorage.setItem(email, accountStringify);
                } else {
                    // displayError('email-error');
                }
            }
        

        const validatePasswordCheker  = (email) => {
            if (password !== passwordCheck) {
                console.log('password doesnt match');
                setValidate(false);
            }
        }



        return (
            <>
                <form action="" onSubmit={handleSubmit} name="form">

                    {formFieldInfo.map((item) => (
                        <InputField
                            contentOfError={item.contentOfError}
                            errorClass={item.errorClass}
                            formFieldClass={item.formFieldClass}
                            id={item.id}
                            inputClass={item.inputClass}
                            key={item.id}
                            label={item.label}
                            name={item.name}
                            placeHolder={item.placeHolder}
                            type={item.type}
                            handleInputChange={handleChange}
                        />
                    ))}
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
