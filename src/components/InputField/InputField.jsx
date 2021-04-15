import React, { Component } from 'react';
import './InputField.css';

function InputField({ contentOfError, errorClass, formFieldClass, handleInputChange, id, inputClass, isDisplay, label, name, placeHolder, type, value }) {

    return (
        <>
            <div className={formFieldClass}>
                <label>{label}</label>
                <input type={type} className={inputClass} value={value} name={name} placeholder={placeHolder} onChange={(event) => handleInputChange(event, name)} />
                <div id={id} className={errorClass + "display-error"} style={{display:isDisplay? "block":'none'}}>{contentOfError}</div>
            </div>
        </>
    );
}


export default InputField;
