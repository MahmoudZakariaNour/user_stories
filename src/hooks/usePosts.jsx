import { useEffect, useState } from "react";

const postsUrl = "https://jsonplaceholder.typicode.com/posts";
export function usePosts() {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    fetch(postsUrl)
      .then((response) => response.json())
      .then((json) => {
        setposts(json);
      });
  }, []);
  
  return posts;
}
