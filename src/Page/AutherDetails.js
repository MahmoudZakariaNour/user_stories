import React from "react";
import { useParams } from "react-router-dom";
import {useAuthors} from "../hooks/useAuthors";

export function AutherDetails() {
  const { AuthId } = useParams();
  const { Auth } = useAuthors(AuthId);
  return (
      <div>
          <h1>{Auth.title}</h1>
             <p>{Auth.body}</p>
      </div>
  );
}
