export default function Congrats({ setr }) {
  return (
    <div onClick={() => setr(1)} style={{ height: "100vh" }}>
      <h1 style={{ color: "black" }}>
        {" "}
        Congratulations!!!
        <br />
        Here is a game as your award
        <br />
        Please click anywhere .
      </h1>
    </div>
  );
}
