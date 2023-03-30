import React from "react";
import { Link } from "react-router-dom";

const Navbartepm = () => {
  return (
    <div
      style={{
        border: "0px solid green",
        height: "70px",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        fontSize: "20px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        marginBottom: "50px",
      }}
    >
      <Link style={{ textDecoration: "none" }} to="/authpage">
        AuthPage
      </Link>
      <Link style={{ textDecoration: "none" }} to="/admin">
        Admin
      </Link>
      <Link style={{ textDecoration: "none" }} to="/dress">
        Dresses
      </Link>
      <Link style={{ textDecoration: "none" }} to="/cart">
        Cartpage
      </Link>
      <Link style={{ textDecoration: "none" }} to="/top">
        Toprated
      </Link>
      <Link style={{ textDecoration: "none" }} to="/shoes">
        shoes
      </Link>
    </div>
  );
};

export default Navbartepm;
