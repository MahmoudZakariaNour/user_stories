import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAddPost } from "../hooks/useAddPost";
import { useAuthor } from "../hooks/useAuthor";
import { useAuthorPost } from "../hooks/useAuthorPost";
import { usePosts } from "../hooks/usePosts";
import { AddPosts } from "./AddPosts";

export function AutherDetails() {
  const { AuthId } = useParams();
  const author = useAuthor(AuthId);
  const authorPosts = useAuthorPost(AuthId);
  
  return (
    author &&
    authorPosts && (
      <>
        <div className="PostDetails">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="Not Found"
            width={"30%"}
            style={{ paddingLeft: "20px" }}
          />
          <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
            <h1>Name: {author.name}</h1>
            <p style={{ fontSize: "20px" }}>email: {author.email}</p>
            <p style={{ fontSize: "20px" }}>Phone Number:{author.phone}</p>
            <p style={{ fontSize: "20px" }}>Website: {author.website}</p>
          </div>
        </div>
        <Link to={"/create/post/"+AuthId} className="btn btn-primary">
          create New Post
        </Link>
        <h3>Author Posts:</h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            gap: "10px",
            marginTop: "30px",
          }}
        >
          {authorPosts.map((authorPosts) => (
            <p
              style={{
                fontSize: "20px",
                width: "300px",
                border: "1px solid grey",
                textAlign: "center",
                height: "100px",
              }}
            >
              {authorPosts.title}
            </p>
          ))}
        </div>
      </>
    )
  );
}
