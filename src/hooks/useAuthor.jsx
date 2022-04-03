import { useEffect, useState } from "react";

const authorsUrl = "https://jsonplaceholder.typicode.com/users";
export function useAuthor(AuthId) {
  const [author, setAuthors] = useState(null);

  useEffect(() => {
    fetch(`${authorsUrl}/${AuthId}`)
      .then((response) => response.json())
      .then((json) => {
        setAuthors(json);
      });
  }, [AuthId]);
  return author ;
}
