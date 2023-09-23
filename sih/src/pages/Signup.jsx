import styles from "./Login.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Signup({ setusername }) {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setuserid] = useState("");
  const [password, setPassword] = useState("");
  const [name, setname] = useState("");
  const [dob, setdob] = useState("");
  const [gender, setgender] = useState("");
  const [phone, setphone] = useState("");
  const [place, setplace] = useState("");
  const cond =
    email.length !== 0 &&
    password.length !== 0 &&
    name.length !== 0 &&
    dob.length !== 0 &&
    gender.length !== 0 &&
    phone.length !== 0;
  let username = "";
  function handleSubmit() {
    // Send a POST request to your Flask server with the form data
    const formData = {
      username: username,
      password: password,
      gender: gender,
      dob: dob,
      place: place,
    };
    axios
      .post("http://localhost:5000/signup", formData)
      .then((response) => {
        // Handle the response from the server, if needed
        console.log("Data sent to server:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  function generateUsername(name, dob) {
    // Extract the first character of the name and convert it to lowercase
    const firstLetter = name.charAt(0).toLowerCase();

    // Extract the year, month, and day from the Date of Birth
    const year = dob.slice(0, 4);
    const month = dob.slice(5, 7); // Zero-pad the month
    const day = dob.slice(8); // Zero-pad the day

    // Remove spaces from the name and convert to lowercase
    const cleanedName = name.toLowerCase();

    // Create the username by combining the first letter, year, month, day, and cleaned name
    const username = `${firstLetter}${year}${month}${day}_${cleanedName}`;

    return username;
  }
  username = cond && generateUsername(name, dob);

  return (
    <main className={styles.login}>
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email">Email</label>
          <input onChange={(e) => setuserid(e.target.value)} value={email} />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className={styles.row}>
          <label>Phone no.</label>
          <input
            type="phone"
            id="phone"
            onChange={(e) => setphone(e.target.value)}
            value={phone}
          />
        </div>
        <div className={styles.row}>
          <label>Place where you live.</label>
          <input
            type="place"
            id="place"
            onChange={(e) => setplace(e.target.value)}
            value={place}
          />
        </div>
        <div className={styles.row}>
          <label>name of your child</label>
          <input
            type="name"
            id="name"
            onChange={(e) => setname(e.target.value)}
            value={name}
          />
        </div>
        <div className={styles.row}>
          <label>gender of your child </label>
          <select
            name="gender"
            id="gender-select"
            onChange={(e) => setgender(e.target.value)}
            value={gender}
          >
            <option value="">--Please choose an option--</option>
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="others">others</option>
          </select>
        </div>

        <div className={styles.row}>
          <label>Date of birth</label>
          <input
            type="date"
            id="dob"
            onChange={(e) => setdob(e.target.value)}
            value={dob}
          />
        </div>

        <div>
          {username.length && (
            <h4>
              Your username is {username}.<br />
              Please remember it to login for future sessions.
            </h4>
          )}
          {cond && username.length !== 0 && (
            <button
              onClick={() => {
                setusername(username);
                handleSubmit();
              }}
            >
              <Link to="/app" className="cta">
                Create account
              </Link>
            </button>
          )}
        </div>
      </form>
    </main>
  );
}
