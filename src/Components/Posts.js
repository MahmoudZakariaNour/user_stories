import React from "react";
import { Link } from "react-router-dom";

export function Posts({ data }) {
  return (
    <div>
     <Link to={`/posts/${data.id}`}><h3>{data.title}</h3></Link>
    </div>
  );
}
