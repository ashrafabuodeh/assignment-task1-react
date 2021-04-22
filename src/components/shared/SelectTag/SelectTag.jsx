import propTypes from "prop-types";
import React from "react";
import "./SelectTag.css";

function SelectTag({ defaultValue, handleInputChange, name, isDisplayed }) {

  return (
    <div className="form-field">
      <label>Choose Your City</label>
      <select
        className="input-field"
        defaultValue={defaultValue}
        name="city"
        onChange={(event) => handleInputChange(name, event.target.value)}
      >
        <option disabled>Choose Your City</option>
        <option value="Jordan">Jordan</option>
        <option value="Japan">Japan</option>
        <option value="America">America</option>
        <option value="Oman">Oman</option>
      </select>
      <div className="display-error" style={{ display: isDisplayed ? "inline-block" : "none" }}>please select a City </div>
    </div>
  );
}

SelectTag.protoTypes = {
  defaultValue: propTypes.string,
  handleInputChange: propTypes.func,
  name: propTypes.string.isRequired,
};

SelectTag.defaultProps = {
  defaultValue: "Choose Your City"
}

export default SelectTag;
