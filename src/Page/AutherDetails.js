import React from "react";
import { useParams } from "react-router-dom";
import { useAuthor } from "../hooks/useAuthor";

export function AutherDetails() {
  const { AuthId } = useParams();
  const Auth  = useAuthor(AuthId);
  console.log(AuthId)
  return (
    <div>
      <h1>{Auth.name}</h1>
      <p>{Auth.username}</p>
    </div>
  );
}
