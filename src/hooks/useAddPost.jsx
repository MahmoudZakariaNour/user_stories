import React from 'react'
import { useParams } from 'react-router-dom';
import { useAuthorPost } from '../hooks/useAuthorPost';


export function useAddPost() {
    const { AuthId } = useParams();

    const { post, setPost } = useAuthorPost(AuthId);
  
  

  return (
    <div>useAddPost</div>
  )
}
