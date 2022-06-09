import classes from "../app.module.css";
import { DebounceInput } from "react-debounce-input";
import axios from "axios";
import { useEffect } from "react";

const Dashboard = () => {
  console.log("dashboard");

  const getData = async () => {
    const data = await axios.get("https://ipinfo.io/161.185.160.93/geo");
    console.log(data);
  };

  useEffect(() => {
    // Update the document title using the browser API
    getData();
  }, []);
  const data = {
    ip: "161.185.160.93",
    city: "New York City",
    region: "New York",
    country: "US",
    loc: "40.7143,-74.0060",
    org: "AS22252 The City of New York",
    postal: "10004",
    timezone: "America/New_York",
    readme: "https://ipinfo.io/missingauth",
  };
  //   const handleChange = (event) => {
  //     const id = event.target.value;
  //     //     axios.get(`https://ipinfo.io/${id}/geo`,config).then((resp) => {
  //     //         console.log(resp.data);
  //     //       }).catch((error)=>console.error(error));
  //     //   }
  return (
    <div className={classes.container}>
      <h2>Wlcome to DashBoard</h2>
      <DebounceInput
        className={classes.input}
        debounceTimeout={300}
        placeholder="enter your IP Address"
        // onChange={handleChange}
      />
       <h4> here is your IP Details...! </h4>
      <div className={classes.table}>
       
        <table>
          {Object.entries(data).map((key, val) => (
            <tr>
              <td>{key[0]}</td>
              <td>{` :  ${key[1]}`}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
