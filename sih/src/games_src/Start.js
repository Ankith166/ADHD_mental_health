import { Link } from "react-router-dom";
import "./index.css";
import { motion } from "framer-motion";
function Start({ setstart, data }) {
  return (
    <div
      className="design "
      onClick={() => {
        data.length !== 0 && setstart("ready");
      }}
      // style={{
      //   background:
      //     "url(watercolor-children-s-day-spanish-background_23-2149341654.png)",
      // }}
    >
      <div
        className="startpanda"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      ></div>
      <h1 style={{ color: "black" }}>
        hello I am a panda.
        <br /> Today i will be your guide .
      </h1>
      {data.length !== 0 && (
        <h2
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          style={{ color: "black" }}
        >
          Click Anywhere to Start
        </h2>
      )}
      {data.length === 0 && (
        <>
          {" "}
          <h2 style={{ color: "red" }}>
            Please complete the parents section first
          </h2>
          {data.length === 0 && (
            <button className="ctab">
              <Link to="/app" style={{ textDecoration: "none" }}>
                Go back
              </Link>
            </button>
          )}
        </>
      )}
    </div>
  );
}
export default Start;
