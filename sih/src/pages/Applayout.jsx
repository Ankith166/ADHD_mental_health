import Children from "./Childrensec";
import Parents from "./Parents";
import styles from "./AppLayout.module.css";

import { Link } from "react-router-dom";

function Applayout({ data, cdata, setcdata, setdata }) {
  return (
    <div className={styles.app}>
      {data.length === 0 && <Parents />}
      {cdata.length === 0 && <Children />}
      {data.length !== 0 && cdata.length !== 0 && (
        <div
          style={{
            height: "100vh",
            width: "100%",

            textAlign: "center",
          }}
        >
          <h1 style={{ color: "black" }}>Thank you</h1>
          <button
            style={{
              backgroundColor: "var(--color-brand--2)",
              color: "var(--color-dark--1)",
              textTransform: "uppercase",
              textDecoration: "none",
              fontSize: "1.6rem",
              fontWeight: "600",
              padding: "1rem 3rem",
              borderRradius: "5px",
              width: "100px",
            }}
            onClick={() => {
              setcdata([]);
              setdata([]);
            }}
          >
            <Link to="/app">Go back</Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default Applayout;
