import propTypes from "prop-types";
import React from "react";
import "./Button.css";

function Button({ label }) {
    
  return (
    <div className="form-field">
      <button type="submit" className="input-field submit-field">
        {label}
      </button>
    </div>
  );
}

Button.protoTypes = {
  label: propTypes.string.isRequired,
};

export default Button;
