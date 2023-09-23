import Logo from "./Logo";
import { Link } from "react-router-dom";
import styles from "./Childrensec.module.css";
import { useState } from "react";
function Children() {
  const [change, handlechange] = useState(false);
  return (
    <div
      className={`${styles.child} ${change && styles.select}`}
      onMouseOver={() => handlechange(true)}
      onMouseLeave={() => handlechange(false)}
    >
      <Logo />
      <div className={styles.par}>
        <h1>Hello bacchooo</h1>
        <h2>Please select the button below and enjoy our games</h2>
      </div>
      <button>
        <Link to="/games" className="cta">
          Start now
        </Link>
      </button>
      <footer className={styles.footer}>
        <p className={styles.copyright}> &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default Children;
