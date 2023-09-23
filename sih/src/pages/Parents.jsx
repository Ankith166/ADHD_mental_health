import Logo from "./Logo";
import { Link } from "react-router-dom";
import styles from "./Parents.module.css";
import { useState } from "react";
//${change && "styles.select"}
//import { Outlet } from "react-router-dom";
function Sidebar({ data }) {
  const [change, handlechange] = useState(false);

  return (
    <div
      className={`${styles.sidebar} ${change && styles.select}`}
      onMouseOver={() => handlechange(true)}
      onMouseLeave={() => handlechange(false)}
    >
      <Logo />
      <div className={styles.par}>
        <h1>Dear parents</h1>
        <h2>Please help us by answering some questions</h2>
      </div>
      <button>
        <Link to="/quiz" className="cta">
          Start now
        </Link>
      </button>
      <footer className={styles.footer}>
        <p className={styles.copyright}> &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default Sidebar;
