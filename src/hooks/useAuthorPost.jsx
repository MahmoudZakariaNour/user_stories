import React, { useEffect, useReducer, useState } from "react";

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
  // const initialState = {
  //    {}
  // };

  //const [authorPost, setauthorPost] = useState(null);
  const [authorPost, dispatch] = useReducer(reducer);

  useEffect(() => {
    fetch(`${postsUrl}?userId=${AuthId}`)
      .then((response) => response.json())
      .then((json) => {
        //setauthorPost(json);
        if (json){
          dispatch({ type: "FETCH_SUCCESS", payload: json });
        }
      });
  }, [AuthId]);
  return authorPost;
}
