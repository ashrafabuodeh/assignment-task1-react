import { Button, InputField } from "../..";
import { LogInInfo } from "../../../data";
import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./LogIn.css";

function LogIn() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();
  const [validPassword, setValidPassword] = useState(false);

  useEffect(() => {
    validatePassword(userData["password"]);
  });

  const handleChange = (name, value) => {
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    isEmailExist(userData["email"]);
  };

  const validatePassword = (password) => {
    const regularExpressionForPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!regularExpressionForPassword.test(password)) {
      displayError(1, true);
      setValidPassword(false);
    } else {
      setValidPassword(true);
      displayError(1, false);
    }
  };

  const isEmailExist = (email) => {
    const parseData = JSON.parse(localStorage.getItem(email));
    if (
      localStorage.getItem(userData["email"]) &&
      parseData.password === userData["password"] &&
      validPassword
    ) {
      history.push("/home/" + email);
    }
  };

  const displayError = (id, value) => {
    LogInInfo[id].isDisplayed = value;
  };

  return (
    <div className="sign-in">
      <h1 className="title">Log In</h1>
      <form onSubmit={handleSubmit}>
        {LogInInfo.map((item) => (
          <InputField
            contentOfError={item.contentOfError}
            errorClass={item.errorClass}
            formFieldClass={item.formFieldClass}
            handleInputChange={handleChange}
            id={item.id}
            inputClass={item.inputClass}
            isDisplayed={item.isDisplayed}
            isRequired={item.isRequired}
            key={item.id}
            label={item.label}
            name={item.name}
            placeHolder={item.placeHolder}
            type={item.type}
          />
        ))}
        <Button label={"LOGIN"} />
      </form>
    </div>
  );
}

export default LogIn;
