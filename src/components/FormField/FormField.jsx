import React, { Component } from 'react';
import './FormField.css';

class FormField extends Component {
    state = {  }
    render() { 
        const {contentOfError, errorClass, formFieldClass, handleInputChange, id, inputClass, label, name, placeHolder, type, value}= this.props;
        return ( 
            <>
             <div className={formFieldClass}>
                <label>{label}</label>
                <input type={type} className={inputClass} value={value} name={name} placeholder={placeHolder} onChange={(event)=>handleInputChange(event,name)}/>
                <div id={id} className={errorClass}>{contentOfError}</div>
            </div>
            </>
         );
    }
}
 
export default FormField;
