import React from "react";
import { useParams } from "react-router-dom";
import { usePost } from "../hooks/usePost";

export function PostDetails() {
  const { PostId } = useParams();
  const {post,comment}  = usePost(PostId);
  return  (
    post && comment &&
   <div>
    <h1>{post.title}</h1>
    <p>{post.body}</p>
    <h3>Comments</h3>
    {comment.map((comm)=>(
        <p key={comm.id}>{comm.body}</p>
    ))}
  </div>
    );
}
