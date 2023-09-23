import React from "react";

const Tile = ({ image, onClick }) => {
  return (
    <div onClick={onClick}>
      <img style={{ height: "200px", width: "200px" }} src={image} alt="Tile" />
    </div>
  );
};

export default Tile;
