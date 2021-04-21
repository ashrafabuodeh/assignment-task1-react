import propTypes from "prop-types";
import React from "react";
import "./SelectTag.css";

function SelectTag({ defaultValue, handleInputChange, name }) {

  return (
    <div className="form-field">
      <label>Choose Your City</label>
      <select
        name="city"
        className="input-field"
        onChange={(event) => handleInputChange(name, event.target.value)}
        defaultValue=""
        defaultValue={defaultValue}
      >
        <option default>Choose Your City</option>
        <option value="Jordan">Jordan</option>
        <option value="Japan">Japan</option>
        <option value="America">America</option>
        <option value="Oman">Oman</option>
      </select>
      <div className="display-error">please select a City </div>
    </div>
  );
}

SelectTag.protoTypes = {
  defaultValue: propTypes.string.isRequired,
  handleInputChange: propTypes.func,
  name: propTypes.string.isRequired,
};

export default SelectTag;
