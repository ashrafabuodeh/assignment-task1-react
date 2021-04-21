import { GridItems, Header, Main } from "../../../components";
import { useLocation } from "react-router-dom";
import React from "react";

function HomePage() {
  const location = useLocation();
  const email = location.pathname.slice(6);
  
  return (
    <>
      <Header email={email} />
      <Main />
      <GridItems />
    </>
  );
}

export default HomePage;
