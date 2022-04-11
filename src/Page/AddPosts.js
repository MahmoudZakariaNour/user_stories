import React, { useState } from "react";
import { createPortal } from "react-dom";
import { useParams } from "react-router-dom";
import { useAuthorPost } from "../hooks/useAuthorPost";

export function AddPosts() {
  const { AuthId } = useParams();
  const authorPosts = useAuthorPost(AuthId);
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  const [all, setAll] = useState("");



  return createPortal( authorPosts && (
    <>
      <p>Title:</p>
      <input
        className="form-control"
        type="text"
        value={title}
        onChange={(e) => {

          settitle(e.target.value);
        }}
        style={{ width: "800px" }}

      />
      <p>Body:</p>
      <input
        className="form-control"
        type="text"
        value={body}
        onChange={(e) => {
          setbody(e.target.value);
        }}
        style={{ width: "800px" }}
      />

      <button
        className="btn btn-primary"
        onClick={(value) => {
          if (body!=="" || title !== "")
          {

            setAll([
              {userId: AuthId, id: Math.random(),title: title,body: body   },
              ...authorPosts,
            ]);
            setbody("");
            settitle("");
          }
        }}
      > Create New Post</button>
      {console.log(all)}
    </>),document.body
  );
}
