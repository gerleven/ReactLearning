import React from "react";

function Pokemon({ name, id, avatar }) {
  return (
    <div>
      <figure>
        <span>{id} - </span>
        <span>{name}</span>
        <img src={avatar}></img>
      </figure>
    </div>
  );
}

export default Pokemon;
