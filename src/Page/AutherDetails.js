import React from "react";
import { useParams } from "react-router-dom";
import { useAuthor } from "../hooks/useAuthor";

export function AutherDetails() {
  const { AuthId } = useParams();
  const author = useAuthor(AuthId);
  return (
    author && (
      <div className="PostDetails">
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="Not Found"
          width={"30%"}
          style={{ paddingLeft: "20px" }}
        />
        <div style={{ paddingLeft: "20px" ,paddingRight: "20px" }}>
          <h1>Name: {author.name}</h1>
          <p style={{fontSize:"20px"}}>email: {author.email}</p>
          <p style={{fontSize:"20px"}}>Phone Number:{author.phone}</p>
          <p style={{fontSize:"20px"}}>Website: {author.website}</p>
        </div>
      </div>
    )
  );
}
