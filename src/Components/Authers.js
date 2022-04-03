import React from "react";
import { Link } from "react-router-dom";

export function Auther({ data }) {
  return (
    <div>
      <h3>{data.name}</h3>
     <Link to={`/home/${data.id}`}>READ MORE</Link>
    </div>
  );
}
