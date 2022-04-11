import React from "react";
import { Posts } from "../Components/Posts"  ;
import {usePosts} from "../hooks/usePosts";
import "./Style.css"
export function PostPage() {
  const List = usePosts();
  
  console.log("clicked");

  return (List &&
    <div className="PostsList">
      {List.map((posts) => (
        <Posts key={posts.id} data={posts} />
      ))}
    </div>
  );
}