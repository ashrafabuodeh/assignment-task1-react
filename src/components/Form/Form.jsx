import { formFieldInfo } from '../../data'
import { InputField } from '../../components';
import React, { Component } from 'react';
import './Form.css';

class Form extends Component {

    state = {
        isvalidate: true,
        email: "",
        companyName: "",
        password: "",
        passwordCheck: "",
        city: "",
        formErrors: {
            email: "",
            companyName: "",
            password: "Password must contains a mix of letters, numbers &symbols",
            passwordCheck: "",
            city: "",

        }

    }


    handleSubmit = (event) => {
        event.preventDefault();
        this.validateCompanyName(this.state.companyName)
        this.validatePassword(this.state.password)
        this.validatePasswordCheker(this.state.passwordCheck);
        console.log(this.state.isvalidate)
        console.log(this.state)
    }

    handleChange = (event, name) => {
        // console.log(event.target.value)
        if (name === 'companyName')
            this.setState({ companyName: event.target.value });
        else
            if (name === 'email')
                this.setState({ email: event.target.value });
            else
                if (name === 'password') {
                    this.setState({ password: event.target.value });
                }
                else
                    if (name === 'passwordCheck')
                        this.setState({ passwordCheck: event.target.value });
                    else
                        if (name === 'city')
                            this.setState({ city: event.target.value });

    }

    validateCompanyName = (companyName) => {
        if (companyName.trim() === '') {
            console.log('company name is empty');
            this.setState({ isvalidate: this.state.isvalidate = false })
        }
    }

    validatePassword = (password) => {
        const regularExpressionForPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
        if (!regularExpressionForPassword.test(password)) {
            console.log('password is error');
            this.setState({ isvalidate: this.state.isvalidate = false })
        }

    }

    validatePasswordCheker = (passwordCheck) => {
        if (this.state.password !== this.state.passwordCheck) {
            console.log('password doesnt match');
            this.setState({ isvalidate: this.state.isvalidate = false })
        }
    }




    render() {
        return (
            <>
                <form action="" onSubmit={this.handleSubmit} name="form">

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
                            value={this.state.value}
                            handleInputChange={this.handleChange}
                        />
                    ))}
                    <div className="form-field">
                        <label>Choose Your City</label>
                        <select name="city" className="input-field" value={this.state.value} onChange={(event) => this.handleChange()}>
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
}


export default Form;
