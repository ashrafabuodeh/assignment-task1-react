import React, { Component } from 'react';
import './InputField.css';

class InputField extends Component {
    render() {
        const { contentOfError, errorClass, formFieldClass, handleInputChange, id, inputClass, label, name, placeHolder, type, value } = this.props;
        
        return (
            <>
                <div className={formFieldClass}>
                    <label>{label}</label>
                    <input type={type} className={inputClass} value={value} name={name} placeholder={placeHolder} onChange={(event) => handleInputChange(event)} />
                    <div id={id} className={errorClass}>{contentOfError}</div>
                </div>
            </>
        );
    }
}

export default InputField;
