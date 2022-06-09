import { DebounceInput } from "react-debounce-input";
import axios from "axios";
import { useState } from "react";
import classes from "../app.module.css";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [ipData, setIpData] = useState(undefined);
  const [error, setError] = useState("");
  const hasLogin=sessionStorage.getItem("login")
  const navigate=useNavigate()

  const handleChange = async (event) => {
    try {
      const id = event.target.value;
      if (id !== "") {
        const res = await axios.get(`https://ipinfo.io/${id}/geo`);
        const data = res;
        setIpData(data.data);
      } else {
        setIpData(undefined);
        setError("");
      }
    } catch (error) {
      if (error) {
        setError(error.response.data.error.message);
      }
    }
  };

  const handleLogout=()=>{
    googleLogout();
    navigate('/')
  }
  return (
    <div className={classes.container}>
      {hasLogin ? <button className='g_id_signout' onClick={handleLogout}>
          Logout
        </button> : null}
      <h2>Wlcome to DashBoard</h2>
      <DebounceInput
        className={classes.input}
        debounceTimeout={1000}
        placeholder="Enter your IP Address"
        onChange={handleChange}
      />
      {ipData ? (
        <p> here is your IP Details...! </p>
      ) : (
        <p className={classes.errorText}>{error}</p>
      )}
      <div className={classes.table}>
        <table className={classes.tableData}>
          {ipData
            ? Object.entries(ipData).map((key, val) => (
                <tr>
                  <td>{key[0]}</td>
                  <td>{` :  ${key[1]}`}</td>
                </tr>
              ))
            : null}
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
