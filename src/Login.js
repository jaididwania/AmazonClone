import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./Firebase";

//useHistory is a HOOK

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault(); //No refresh after submmitting form
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //once logged in, redirect to homepage
        history.push("/");
      })
      //invalid email and password
      .catch((e) => alert(e.message));
  };

  const register = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //creates a user with email and password,redirects to homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          alt=""
          src="https://www.techtricksworld.com/wp-content/uploads/2017/02/Amazon-logo.png"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <button onClick={login} type="submit" className="login__SignInButton">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's Condition of Use and Sales. Please
          see our Privacy notice, our Cookies Notice and our interest-based Ads
          Notice.
        </p>
        <button onClick={register} className="login_RegisterButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
