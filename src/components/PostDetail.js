import React from 'react';
import { useState, useEffect } from 'react';


export const PostDetail = () => {
  const [post] = useState({});
 

  useEffect(() => {}, []);

  return (
    <div className="post-detail">
      PostDetail
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};
