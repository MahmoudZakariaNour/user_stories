import React from "react";
import { Link } from "react-router-dom";

export function Posts({ data }) {
  return (
    <div style={{ width: "25%", height: "300px" }}>
      <img
        src="https://blog.hootsuite.com/wp-content/uploads/2019/03/Schedule-Facebook-Posts.jpg"
        alt="Not Found"
        width={"50%"}
      />

      <Link to={`/posts/${data.id}`}>
        <h4 style={{color:"black"}}>{data.title}</h4>
      </Link>
    </div>
  );
}
