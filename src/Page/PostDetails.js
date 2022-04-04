import React from "react";
import { useParams } from "react-router-dom";
import { usePost } from "../hooks/usePost";
import "./Style.css";
export function PostDetails() {
  const { PostId } = useParams();
  const { post, comment } = usePost(PostId);
  return (
    post &&
    comment && (
      <div className="PostDetails">
        <img
          src="https://blog.hootsuite.com/wp-content/uploads/2019/03/Schedule-Facebook-Posts.jpg"
          alt="Not Found"
          width={"30%"}
          height={"500px"}
          style={{ paddingLeft: "20px" }}
        />
        <div style={{ paddingLeft: "20px" ,paddingRight: "20px" }}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <h3>Comments</h3>
          {comment.map((comm) => (
            <>
            <b key={comm.id}>{comm.email}</b>
            <p key={comm.id}>{comm.body}</p>
            </>
          ))}
        </div>
      </div>
    )
  );
}
