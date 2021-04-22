import propTypes from "prop-types";
import React from "react";
import "./InputField.css";

function InputField({
  contentOfError,
  defaultValue,
  errorClass,
  formFieldClass,
  handleInputChange,
  id,
  inputClass,
  isDisplayed,
  isRequired,
  label,
  name,
  placeHolder,
  type
}) {
  return (
    <>
      <div className={formFieldClass}>
        <label>{label}</label>
        <input
          className={inputClass}
          defaultValue={defaultValue}
          name={name}
          onChange={(event) => handleInputChange(name, event.target.value)}
          placeholder={placeHolder}
          required={isRequired}
          type={type}
        />
        <div
          className={errorClass}
          id={id}
          style={{
            backgroundColor: "red",
            display: isDisplayed ? "inline-block" : "none",
            marginBottom: "5px",
            padding: "20px",
          }}
        >
          {contentOfError}
        </div>
      </div>
    </>
  );
}

InputField.protoTypes = {
  contentOfError: propTypes.string.isRequired,
  defaultValue: propTypes.string,
  errorClass: propTypes.string.isRequired,
  formFieldClass: propTypes.string.isRequired,
  handleInputChange: propTypes.func,
  id: propTypes.number.isRequired,
  inputClass: propTypes.string.isRequired,
  isDisplayed: propTypes.string.isRequired,
  isRequired: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  placeHolder: propTypes.string.isRequired,
  type: propTypes.string.isRequired,

};


InputField.defaultProps = {
  defaultValue: null,
  handleInputChange: null,
};


export default InputField;
