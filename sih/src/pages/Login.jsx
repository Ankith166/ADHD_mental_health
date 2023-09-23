import styles from "./Login.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Login({ setusername }) {
  // PRE-FILL FOR DEV PURPOSES
  const [userid, setuserid] = useState("");
  const [password, setPassword] = useState("");
  const [x, setx] = useState(-1);
  function handleSubmit() {
    const formData = {
      username: userid,
      password: password,
    };
    // Send a POST request to your Flask server with the form data
    axios
      .post("http://localhost:5000/login", formData)
      .then((response) => {
        // Handle the response from the server, if needed
        console.log("Data sent to server:", response.data.status);
        setx(response.data.status);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <main className={styles.login}>
      {/* <form className={styles.form}> */}
      <div className={styles.form}>
        <div className={styles.row}>
          <label>User id</label>
          <input onChange={(e) => setuserid(e.target.value)} value={userid} />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {(userid.length === 0 || password.length === 0) && (
            <p style={{ color: "red" }}>Please enter the above fields</p>
          )}
        </div>
        <p>Don't have an account?</p>

        <div>
          <button>
            <Link to="/signup" className="cta" style={{ fontSize: "1rem" }}>
              Sign up
            </Link>
          </button>
        </div>
        <div>
          {userid.length !== 0 &&
            password.length !== 0 &&
            (x === -1 || x === 0) && (
              <button
                style={{ marginTop: "10px" }}
                className={styles.cta}
                onClick={() => {
                  setusername(userid);
                  handleSubmit();
                }}
              >
                Check
              </button>
            )}
          {x === 0 && <p style={{ color: "red" }}>Invalid credentials</p>}
          {x === 1 && (
            <h3 style={{ color: "green" }}>Please press login now.</h3>
          )}
          {userid.length !== 0 && password.length !== 0 && x === 1 && (
            <button
              style={{ marginTop: "10px" }}
              onClick={() => {
                setusername(userid);
              }}
            >
              <Link to="/app" className="cta">
                Login
              </Link>
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
