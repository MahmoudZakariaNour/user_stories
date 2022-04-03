import React from "react";
import { Auther } from "../Components/Authers"  ;
import {useAuthors} from "../hooks/useAuthors";

export function Authors() {
  const List = useAuthors();

  return (
    <div>
      {List.map((Authers) => (
        <Auther key={Authers.id} data={Authers} />
      ))}
    </div>
  );
}