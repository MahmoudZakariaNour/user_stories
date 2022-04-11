import React from "react";
import { Link } from "react-router-dom";
import { useAuthor } from "../hooks/useAuthor";

export function Posts({ data }) {

  const Author= useAuthor(data.userId);

  return Author && (
    <div style={{ width: "25%",  border:"1px solid darkgrey" ,height:"300px", padding:"20px", margin:"20px" }}>
      <img
        src="https://blog.hootsuite.com/wp-content/uploads/2019/03/Schedule-Facebook-Posts.jpg"
        alt="Not Found"
        width={"50%"}
      />
      <Link to={`/posts/${data.id}`}>
        <h4 style={{color:"black"}}>{data.title}</h4>
      </Link>
      <span style={{ }}><b>Author:</b> {Author.name}</span>
    </div>
  );
}
