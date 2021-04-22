import { Button, InputField, SelectTag } from "../../../components";
import { formFieldInfo } from "../../../data";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./ProfilePage.css";

function ProfilePage() {
  const location = useLocation();
  const emailId = location.pathname.slice(13);
  const parseData = JSON.parse(localStorage.getItem(emailId));
  const [userData, setUserData] = useState({
    city: parseData.city,
    companyName: parseData.companyName,
    email: parseData.email,
    image: parseData.image,
    password: parseData.password,
    passwordCheck: parseData.passwordCheck,
  });

  const [validCity, setValidCity] = useState(false);
  const [validCompanyName, setValidCompanyName] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [validPasswordChecker, setValidPasswordChecker] = useState(false);
  const [profileImage, setProfileImage] = useState("");
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    validateCity(userData["city"]);
    validateCompanyName(userData["companyName"]);
    validatePassword(userData["password"]);
    validatePasswordCheker(userData["password"], userData["passwordCheck"]);
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    editAccount();
  };

  const handleChange = (name, value) => {
    setUserData({ ...userData, [name]: value });
  };

  const validateCompanyName = (companyName) => {
    if (companyName.trim() === "") {
      displayError(companyName, true, 1);
      setValidCompanyName(false);
    } else {
      displayError(companyName, false, 1);
      setValidCompanyName(true);
    }
  };

  const validatePassword = (password) => {
    const regularExpressionForPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!regularExpressionForPassword.test(password)) {
      displayError(password, true, 2);
      setValidPassword(false);
    } else {
      displayError(password, false, 2);
      setValidPassword(true);
    }
  };

  const editAccount = () => {
    const accountStringify = JSON.stringify(userData);
    const check =
      validCity && validCompanyName && validPassword && validPasswordChecker;
    if (check) {
      if (localStorage.getItem(userData["email"])) {
        localStorage.setItem(userData["email"], accountStringify);
        setFlag(true);
      }
    }
  };

  const validatePasswordCheker = (password, passwordCheck) => {
    if (password !== passwordCheck) {
      displayError(passwordCheck, true, 3);
      setValidPasswordChecker(false);
    } else {
      displayError(passwordCheck, false, 3);
      setValidPasswordChecker(true);
    }
  };

  const validateCity = (city) => {
    if (city === "Choose Your City" || city === "") {
      setValidCity(false);
    } else {
      setValidCity(true);
    }
  };

  const displayError = (name, value, id) => {
    formFieldInfo[id].isDisplayed = value;
  };

  const encodeImageFile = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      userData["image"] = reader.result;
      setProfileImage(userData['image']);
    };
    reader.readAsDataURL(file);
  };

  const isDisplayedCity = () => {
    return userData['city'] === 'Choose Your City' ? true : false;
  };

  return (
    <>
      <img
        className="profile-picture"
        src={userData["image"]}
        alt="profile picture"
      />
      <h1 className="title">UPDATE PROFILE</h1>
      <form onSubmit={handleSubmit} name="form">
        {formFieldInfo.map((item) => (
          <InputField
            contentOfError={item.contentOfError}
            defaultValue={userData[item.name]}
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
        <SelectTag
          defaultValue={userData["city"]}
          handleInputChange={handleChange}
          isDisplayed={isDisplayedCity()}
          name="city"
          onSubmit={handleSubmit}
        />
        <div className="upload-image">
          <label>Upload Profile Image</label>
          <input
            className="input-file"
            name="ImageStyle"
            onChange={encodeImageFile}
            type="file"
          />
        </div>
        <Button label={"edit profile"} />
      </form>
      <h3 style={{ display: flag ? "inline-block" : "none" }}>
        Your Personal Information Updated successfully
      </h3>
    </>
  );
}

export default ProfilePage;
