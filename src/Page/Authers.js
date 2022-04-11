import React from "react";
import { Auther } from "../Components/Authers"  ;
import {useAuthors} from "../hooks/useAuthors";
import './Style.css';
export function Authors() {
  
  const List = useAuthors();
  return (
    <div className="AuthorList">
      {console.log("mahmd")}
      {List.map((Authers) => (
        <Auther key={Authers.id} data={Authers} />
      ))}
    </div>
  );
}