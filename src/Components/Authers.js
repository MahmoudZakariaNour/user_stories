import React from "react";
import { Link } from "react-router-dom";

export function Auther({ data }) {
  return (
    <div style={{width:"25%" , border:"1px solid darkgrey" ,height:"200px", padding:"20px", margin:"20px"}}>
      <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Not Found" width={"30%"}/>
      <h3>{data.name}</h3>
     <Link to={`/home/${data.id}`}>READ MORE</Link>

    </div>
  );
}
