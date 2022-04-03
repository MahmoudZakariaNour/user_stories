import { useEffect, useState } from "react";

const postsUrl = "https://jsonplaceholder.typicode.com/posts";
export function usePost(PostId) {
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState(null);

  useEffect(() => {
    fetch(`${postsUrl}/${PostId}`)
      .then((response) => response.json())
      .then((json) => {
        setPost(json);
      });
  }, [PostId]);
  useEffect(() => {
    fetch(`${postsUrl}/${PostId}/comments`)
      .then((response) => response.json())
      .then((json) => {
        setComment(json);
      });
  }, [PostId]);
  return {post,comment} ;
}
