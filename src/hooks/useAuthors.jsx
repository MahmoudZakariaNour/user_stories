import { useEffect, useState } from "react";

export function useAuthors() {
const authorsUrl = "https://jsonplaceholder.typicode.com/users";
const [author, setAuthors] = useState([]);

  useEffect(() => {
    fetch(authorsUrl)
      .then((response) => response.json())
      .then((json) => {
        setAuthors(json)
      });
  }, []);

  return author;
}
