import { useEffect, useState } from "react";

export function useAuthor(AuthId) {
const authorsUrl = "https://jsonplaceholder.typicode.com/users";
const [author, setAuthors] = useState(null);

  useEffect(() => {
    fetch(`${authorsUrl}/${AuthId}`)
      .then((response) => response.json())
      .then((json) => {
        setAuthors(json)
      });
  }, [AuthId]);

  return author;
}
