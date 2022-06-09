import { useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import classes from '../app.module.css'

const Login = () => {

  const clientId =
    "891106380458-ikqdr6q42db6lom8qi1noo3uinr4h7sg.apps.googleusercontent.com";
  const [loginStatus, setLoginStatus] = useState(true);
  const navigate = useNavigate();

  const onLoginSuccess = (response) => {
    console.log("success:", response);
    navigate("/dashboard");
    setLoginStatus(false);
  };

  const onFail = (res) => {
    console.log("fail:", res);
  };

  return (
    <div className={classes.container}>
      <h1>Login with Google</h1>
      {loginStatus ? (
        <GoogleOAuthProvider clientId={clientId}>
           <GoogleLogin onSuccess={onLoginSuccess} onFailure={onFail} />
        </GoogleOAuthProvider>
      ) : null}

      {!loginStatus ? (
        <GoogleOAuthProvider clientId={clientId}>

        </GoogleOAuthProvider>
      ) : null}
    </div>
  );
};
export default Login;
