import React from "react";
import { Posts } from "../Components/Posts"  ;
import {usePosts} from "../hooks/usePosts";

export function PostPage() {
  const List = usePosts();
  
  return (List &&
    <div>
      {List.map((posts) => (
        <Posts key={posts.id} data={posts} />
      ))}
    </div>
  );
}