export default function Ready({ setstart }) {
  return (
    <>
      <div
        style={{
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ color: "black" }}>
          Let me ask you some questions based on the video I will be showing now
        </h1>
        <h2 style={{ color: "black" }}>Click the button to go to the video</h2>
      </div>
      <button className="ctax" onClick={() => setstart("qstn")}>
        Click
      </button>
    </>
  );
}
