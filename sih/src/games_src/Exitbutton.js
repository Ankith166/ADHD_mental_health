import { Link } from "react-router-dom";
export default function Exitbutton({ setcdata, setdata }) {
  return (
    <button
      className="ctab"
      style={{
        width: "400px",
        marginTop: "0px",
        height: "50px",
        position: "fixed",
        top: "10px",
        right: "10px",
      }}
      onClick={() => {
        setcdata([]);
        setdata([]);
      }}
    >
      <Link to="/app" style={{ textDecoration: "none" }}>
        Exit to main button
      </Link>
    </button>
  );
}
