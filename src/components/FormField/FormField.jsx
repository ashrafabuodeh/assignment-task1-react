import React, { Component } from 'react';
import './FormField.css';

class FormField extends Component {
    state = {  }
    render() { 
        const {formFieldClass,label,type,inputClass,name,placeHolder,id,errorClass,contentOfError} = this.props;
        return ( 
            <>
             <div className = {formFieldClass}>
                <label>{label}</label>
                <input type = {type} className = {inputClass} name = {name} placeholder = {placeHolder} />
                <div id = {id} className = {errorClass}>{contentOfError}</div>
            </div>
            </>
         );
    }
}
 
export default FormField;
