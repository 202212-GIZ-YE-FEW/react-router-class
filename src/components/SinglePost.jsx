import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const SinglePost = () => {
  const [post, setPost] = useState([]);
  const {postId} = useParams();


  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(json => setPost(json))
console.log(postId)
  } , [postId]);

  return (
    <div>
      <h1>Posts</h1>
      {post.body}
    </div>
  )
}

export default SinglePost