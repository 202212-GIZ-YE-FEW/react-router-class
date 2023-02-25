import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => setPosts(json))

  } , []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post)=> (<p key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></p>))}
    </div>
  )
}

export default Posts