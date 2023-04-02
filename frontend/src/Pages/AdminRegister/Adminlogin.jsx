import React from "react";
import "./Admin_Login.css";
import jwt_decode from "jwt-decode";

// import "react-toastify/dist/ReactToastify.css";

import { GoogleLogin } from "@react-oauth/google";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Spinner, useToast } from "@chakra-ui/react";
import Swal from "sweetalert2";

export const Adminlogin = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [confirm, setPasswordcon] = React.useState("");
  const [active, setActive] = React.useState(false);
  const Navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = () => {
    if (name && email && password) {
      axios
        .post(`https://sleepy-pear-toga.cyclic.app/users/register`, {
          name: name,
          email: email,
          password: password,
        })
        .then((res) => {
        ;
          

          setTimeout(() => {
            toast({
              title: "Admin Register Succesfully",
              description: "",
              status: "success",
              variant: "left-accent",
              duration: 500,
              isClosable: true,
              position: "top",
            });

            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />;

            // navigate("/login");
            setActive(false);
          }, 2000);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      Swal.fire("Please Fill Details");
    }
    setEmail("");
    setName("");
    setPassword("");
    setPasswordcon("");
    //
  };

  const handleSubmitlogin = () => {
    if (email && password) {
      axios
        .post(`https://sleepy-pear-toga.cyclic.app/users/login`, {
          email: email,
          password: password,
        })
        .then((res) => {
       

          Swal.fire({
            position: "center",
            icon: "success",
            title: "Login Success",
            showConfirmButton: false,
            timer: 600,
          });

          if (res.data.token) {
            localStorage.setItem("Token", res.data.token);
            Navigate("/admin_Dashboard");
          } else {
            Swal.fire("Please Fill Details");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Login First!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
  };

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const data = axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: {
          Autorization: `Bearer ${tokenResponse.access_token}`,
        },
      });
    
    },
  });

  const signin = useGoogleLogin({
    onSuccess: async (credentialResponse) => {
  
      const decoded = jwt_decode(credentialResponse.credential);
   
    },
  });

  return (
    <div className="admin-back-img">
      <div className="authpage-container">
        <div className="authpage-cont">
          <div className={active === true ? "container active" : "container"}>
            <div className="forms">
              <div className="form login">
                <span className="title">Admin Login</span>

                <form action="#">
                  <div className="input-field">
                    <input
                      className="login_email"
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                    <i className="uil uil-envelope icon"></i>
                  </div>
                  <div className="input-field">
                    <input
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      className="login_pass"
                      placeholder="Enter your password"
                      required
                    />
                    <i className="uil uil-lock icon"></i>
                  </div>

                  <div className="checkbox-text">
                    <div className="checkbox-content">
                      <input type="checkbox" id="logCheck" />
                      <label for="logCheck" className="text">
                        Remember me
                      </label>
                    </div>

                    <a href="/#" className="text">
                      Forgot password?
                    </a>
                  </div>

                  <div
                    onClick={handleSubmitlogin}
                    className="input-field button"
                  >
                    <input className="login_Btn" type="button" value="Login" />
                  
                  </div>
                  <div>
                    <div
                      style={{
                        margin: "auto",
                        display: "flex",
                        justifyContent: "center",
                        padding: "10px 0px",
                        alignItems: "center",
                        fontWeight: "550",
                        fontSize: "20px",
                      }}
                    >
                      OR
                    </div>
                    <div
                      onClick={() => login()}
                      style={{ marginTop: "0px" }}
                      className="input-field button"
                    >
                      <input
                        style={{
                          backgroundColor: "white",
                          color: "black",
                          border: "1px solid black",
                        }}
                        className="login_Btn"
                        type="button"
                        value="Signin with Google 🚀"
                      />
                    </div>
                  </div>
                </form>

                <div className="login-signup">
                  <span onClick={() => setActive(!active)} className="text">
                    Not a member?
                    <a href="#/" className="text signup-link">
                      Signup Now
                    </a>
                  </span>
                </div>
              </div>

              {/* Registration Form  */}
              <div className="form signup">
                <span className="title">Registration</span>

                <form>
                  <div className="input-field">
                    <input
                      className="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      required
                    />
                    <i className="uil uil-user"></i>
                  </div>
                  <div className="input-field">
                    <input
                      className="email"
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                    <i className="uil uil-envelope icon"></i>
                  </div>
                  <div className="input-field">
                    <input
                      className="password"
                      type="password"
                      Name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Create a password"
                      required
                    />
                    <i className="uil uil-lock icon"></i>
                  </div>
                  <div className="input-field">
                    <input
                      type="password"
                      className="password_conf"
                      value={confirm}
                      onChange={(e) => setPasswordcon(e.target.value)}
                      placeholder="Confirm a password"
                      required
                    />
                    <i className="uil uil-lock icon"></i>
                    <i className="uil uil-eye-slash showHidePw"></i>
                  </div>

                  <div className="checkbox-text">
                    <div className="checkbox-content">
                      <input type="checkbox" id="termCon" />
                      <label for="termCon" className="text">
                        I accepted all terms and conditions
                      </label>
                    </div>
                  </div>

                  <div onClick={handleSubmit} className="input-field button">
                    <input
                      className="sigh_Up_Btn"
                      type="button"
                      value="Signup"
                    />
                  </div>

                  {/* <br /> */}
                  <div
                    style={{
                      margin: "auto",
                      display: "flex",
                      justifyContent: "center",
                      padding: "10px 0px",
                      alignItems: "center",
                      fontWeight: "550",
                      fontSize: "20px",
                    }}
                  >
                    OR
                  </div>

                  <div
                    onClick={() => signin()}
                    style={{ marginTop: "0px" }}
                    className="input-field button"
                  >
                    <input
                      style={{
                        backgroundColor: "white",
                        color: "black",
                        border: "1px solid black",
                      }}
                      className="sigh_Up_Btn"
                      type="button"
                      value="Signup by Google 🚀"
                    />
                  </div>
                </form>

                <div className="login-signup">
                  <span onClick={() => setActive(!active)} className="text">
                    Already a member?
                    <a href="/#" className="text login-link">
                      Login Now
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminlogin;
