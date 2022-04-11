import { useEffect, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return action.payload
    default:
      return state;
  }
};
const postsUrl = "https://jsonplaceholder.typicode.com/posts";
export function useAuthorPost(AuthId) {
  const [authorPost, dispatch] = useReducer(reducer);

  useEffect(() => {
    fetch(`${postsUrl}?userId=${AuthId}`)
      .then((response) => response.json())
      .then((json) => {
        if (json){
          dispatch({ type: "FETCH_SUCCESS", payload: json });
        }
      });
  }, [AuthId]);
  return authorPost;
}
