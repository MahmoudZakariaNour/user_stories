import React from "react";
import { useParams } from "react-router-dom";
import { useAuthor } from "../hooks/useAuthor";

export function AutherDetails() {
  const { AuthId } = useParams();
  const author  = useAuthor(AuthId);
  return  (
    author &&
   <div>
    <h1>{author.name}</h1>
    <p>{author.username}</p>
    <p>{author.address.street}</p>
  </div>
    );
}
