import React from 'react'
import { getPost } from '../../lib/getPost';

export default async function SinglePost({params}) {
    const id = params.id;
    const post = await getPost(id);

  return (
    <div>
        <h1 className="font-bold text-lg">Single Post</h1>
        
            <p>Title:{post.title}</p>
            {/* <p>Content: {post.content}</p>
            <p>Date: {post.date}</p> */}
        
    </div>
  )
}
