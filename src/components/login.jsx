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
    navigate("/dashboard");
    sessionStorage.setItem("login",true)
    setLoginStatus(false);
  };

  const onFail = (res) => {
    alert("login fail");
  };

  return (
    <div className={classes.container}>
      <h1>Login with Google</h1>
      {loginStatus ? (
        <GoogleOAuthProvider clientId={clientId}>
           <GoogleLogin onSuccess={onLoginSuccess} onFailure={onFail} />
        </GoogleOAuthProvider>
      ) : null}
    </div>
  );
};
export default Login;
