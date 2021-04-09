import React, { Component } from 'react';
import FormField from '../FormField/FormField'
import formFieldInfo from '../../data/formfield'
import './Form.css';

class Form extends Component {


checkFormInputValidate = (event) =>{
    const city = event.target[4].value ?? '';
    const companyName = event.target[1].value ?? '';
    const email = event.target[0].value ?? '';
    const password = event.target[2].value ??'';
    const passwordCheck = event.target[3].value ??'';
    event.preventDefault();
    const account = new Account({email, companyName, password, passwordCheck, city});
    account.validateAccount();
    account.setAccount();  
} 

// handleInput = (event,name) =>{
//     console.log(event.target[0]);
// }
    render() { 
        return ( 
            <>
             <form action="" onSubmit={this.checkFormInputValidate} name="form">

                     {formFieldInfo.map((item) => (
                        <FormField
                            contentOfError ={item.contentOfError}
                            errorClass = {item.errorClass}
                            formFieldClass = {item.formFieldClass}
                            id = {item.id}
                            inputClass = {item.inputClass}
                            key = {item.id}
                            label ={item.label}
                            name = {item.name}
                            placeHolder = {item.placeHolder}
                            type = {item.type}
                        />
                      ))} 
             <div className="form-field">
                <label>Choose Your City</label>
                <select name="city" className="input-field">
                    <option default disabled selected hidden className="selector-field">Choose Your City</option>
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


class Account {
    constructor({email, companyName, password, passwordCheck, city}){
          this.city = city;
          this.companyName = companyName;
          this.email = email;
          this.isValidateAccount = true;
          this.password = password;
          this.passwordCheck = passwordCheck;
    }

    /**
     * Set accounts for users and check if the account for user is exist, then add  account details to local storage as object
     */
    setAccount = () => {
        const accountStringify = JSON.stringify(this);
        if (this.isValidateAccount)
            if (localStorage.getItem(this.email) === null) {
                localStorage.setItem(this.email, accountStringify);
                // location.replace("../task_1/index.html");
            } else {
                this.displayError('email-error');
            }
    }

     /**
     * Check validate for account by calling all validates input in form
     */
      validateAccount = () => {
        this.validateCity();
        this.validateCompanyName();
        this.validatePassword();
    }

    /**
     * Check validate for city if the user choose city or not 
     */
    validateCity = () => {
        if (this.city === "Choose Your City") {
            this.displayError("option-error");
            this.isValidateAccount = false;
        } else {
            this.removeError("option-error");
        }
    }

    /**
     * Check validate for company Name if it is empty or not 
     */
    validateCompanyName = () => {
        if (this.companyName.trim() ==='') {
            this.displayError("company-error");
            this.isValidateAccount = false;
        } else {
            this.removeError("company-error");
        }
    }

    /**
     * Check validate for password by regular expression 
     */
    validatePassword = () => {
        const regularExpressionForPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
        if (!regularExpressionForPassword.test(this.password)) {
            this.displayError("password-error");
            this.isValidateAccount = false;
        } else {
            this.removeError('password-error');
            this.validatePasswordCheker();
        }
    }

    /**
     * Check validate for confirm password if it is the same for the original password
     */
    validatePasswordCheker = () => {
        if (this.password !== this.passwordCheck) {
            this.displayError("password-check-error");
            this.isValidateAccount = false;
        } else {
            this.removeError("password-check-error");
        }
    }
    displayError = (errorId) => {
        document.getElementById(errorId).style.display = "block";
    }
    
    removeError = (errorId) => {
        document.getElementById(errorId).style.display = "none";
    }
    
}


export default Form;
