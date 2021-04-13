import { formFieldInfo } from '../../data'
import { InputField } from '../../components';
import React, { Component } from 'react';
import './Form.css';

class Form extends Component {

    state = {
        email: "" ,
        companyName : "",
        password : "",
        confirmPassword: "" ,
        chooseYourCity: "" ,
        formErrors : {
            email : "" ,
            companyName: "" ,
            password: "" ,
            confirmPassword: "" ,
            chooseYourCity : "" ,

        }

    }


    handleSubmit = (event) =>{
    event.preventDefault();
    console.log(this.state)
} 

handleChange = (event) =>{
    console.log(event.target.value)
    this.setState({email:event.target.value})

}
    render() { 
        return ( 
            <>
             <form action="" onSubmit={this.handleSubmit} name="form">

                     {formFieldInfo.map((item) => (
                        <InputField
                            contentOfError={item.contentOfError}
                            errorClass= {item.errorClass}
                            formFieldClass= {item.formFieldClass}
                            id= {item.id}
                            inputClass= {item.inputClass}
                            key = {item.id}
                            label={item.label}
                            name= {item.name}
                            placeHolder={item.placeHolder}
                            type= {item.type}
                            value= {this.state.email}
                            handleInputChange ={()=>this.handleChange}
                        />
                      ))} 
             <div className="form-field">
                <label>Choose Your City</label>
                <select name="city" className="input-field">
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
