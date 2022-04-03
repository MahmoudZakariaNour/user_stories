import { useEffect, useState } from "react";

const authorsUrl = "https://jsonplaceholder.typicode.com/users";
export function useAuthors() {
  const [author, setAuthors] = useState([]);

  useEffect(() => {
    fetch(authorsUrl)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setAuthors(json)
      });
  }, []);

  return author;
}
