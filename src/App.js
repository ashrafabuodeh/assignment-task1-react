import { AboutUs, HomePage, LogIn, ProfilePage, SignUp } from "../src/components/pages";
import { Route } from "react-router-dom";
import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="wrapper">
        <Route exact path="/" component={SignUp}></Route>
        <Route exact path="/login" component={LogIn}></Route>
      </div>
      <div className="home-wrapper">
        <Route exact path="/AboutUs" component={AboutUs}></Route>
        <Route exact path="/home" component={HomePage}></Route>
        <Route exact path="/home/:email" component={HomePage}></Route>
      </div>
      <div className="wrapper">
        <Route exact path="/profilepage/:email" component={ProfilePage}></Route>
      </div>
    </>
  );
}

export default App;
