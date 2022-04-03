import React from "react";
import { Auther } from "../Components/Authers"  ;
import {useAuthors} from "../hooks/useAuthors";

export function Authers() {
  const List = useAuthors();

  return (
    <div>
      {List.map((post) => (
        <Auther key={List.id} Auther={List} />
      ))}
    </div>
  );
}