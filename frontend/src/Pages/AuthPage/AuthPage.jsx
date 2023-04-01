import React from 'react';
import './AuthPage.css';
import jwt_decode from "jwt-decode";

// const clientID = 559548995076-sohrprkhs7n88k53f4casrqisqk9otfs.apps.googleusercontent.com
// const clientSecret = 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
import { GoogleLogin } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';



const AuthPage = () => {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [active, setActive] = React.useState(false)

  const login = useGoogleLogin({
    onSuccess: async tokenResponse => {
      const data = axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: {
          "Autorization": `Bearer ${tokenResponse.access_token}`
        }
      })
      console.log(data)
    },
  });


  const signin = useGoogleLogin({
    onSuccess: async credentialResponse => {
      console.log(credentialResponse);
      const decoded = jwt_decode(credentialResponse.credential)
      console.log(decoded)
    }
  })




  return (
    <div>
      <div className='authpage-container'>
        <div className='authpage-cont'>
          <div className={active === true ? "container active" : "container"}>
            <div className="forms">
              <div className="form login">
                <span className="title">Login</span>

                <form action="#">
                  <div className="input-field">
                    <input className="login_email" type="text" placeholder="Enter your email" required />
                    <i className="uil uil-envelope icon"></i>
                  </div>
                  <div className="input-field">
                    <input type="password" className="login_pass" placeholder="Enter your password" required />
                    <i className="uil uil-lock icon"></i>
                  </div>

                  <div className="checkbox-text">
                    <div className="checkbox-content">
                      <input type="checkbox" id="logCheck" />
                      <label for="logCheck" className="text">Remember me</label>
                    </div>

                    <a href="/#" className="text">Forgot password?</a>
                  </div>

                  <div className="input-field button">
                    <input className="login_Btn" type="button" value="Login" />
                  </div>
                  <div>
                    <div style={{ margin: "auto", display: "flex", justifyContent: "center", padding: "10px 0px", alignItems: "center", fontWeight: "550", fontSize: "20px" }}>
                      OR
                    </div>
                    <div onClick={() => login()} style={{ marginTop: "0px" }} className='input-field button'>
                      <input style={{ backgroundColor: "white", color: "black", border: "1px solid black" }} className="login_Btn" type="button" value="Signin with Google 🚀" />
                    </div>

                  </div>
                </form>

                <div className="login-signup">
                  <span onClick={() => setActive(!active)} className="text">Not a member?
                    <a href="#/" className="text signup-link">Signup Now</a>
                  </span>
                </div>
              </div>

              {/* Registration Form  */}
              <div className="form signup">
                <span className="title">Registration</span>

                <form action="#">
                  <div className="input-field">
                    <input className="name" type="text" placeholder="Enter your name" required />
                    <i className="uil uil-user"></i>
                  </div>
                  <div className="input-field">
                    <input className="email" type="text" placeholder="Enter your email" required />
                    <i className="uil uil-envelope icon"></i>
                  </div>
                  <div className="input-field">
                    <input className="password" type="password" Name="password" placeholder="Create a password"
                      required />
                    <i className="uil uil-lock icon"></i>
                  </div>
                  <div className="input-field">
                    <input type="password" className="password_conf" placeholder="Confirm a password" required />
                    <i className="uil uil-lock icon"></i>
                    <i className="uil uil-eye-slash showHidePw"></i>
                  </div>

                  <div className="checkbox-text">
                    <div className="checkbox-content">
                      <input type="checkbox" id="termCon" />
                      <label for="termCon" className="text">I accepted all terms and conditions</label>
                    </div>
                  </div>

                  <div className="input-field button">
                    <input className="sigh_Up_Btn" type="button" value="Signup" />
                  </div>
                  {/* <br /> */}
                  <div style={{ margin: "auto", display: "flex", justifyContent: "center", padding: "10px 0px", alignItems: "center", fontWeight: "550", fontSize: "20px" }}>
                    OR
                  </div>

                  <div onClick={() => signin()} style={{ marginTop: "0px" }} className="input-field button">
                    <input style={{ backgroundColor: "white", color: "black", border: "1px solid black", }} className="sigh_Up_Btn" type="button" value="Signup by Google 🚀" />
                  </div>


                </form>

                <div className="login-signup">
                  <span onClick={() => setActive(!active)} className="text">Already a member?
                    <a href="/#" className="text login-link">Login Now</a>
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>


    </div>
  )
}

export default AuthPage