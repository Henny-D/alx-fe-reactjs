import React from 'react'
import { useQuery } from 'react-query'

const fetchPosts =async () => {
    const response = await fetch ('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
        throw new Error('Network response error!');
    }
    return response.json ();
}

function PostsComponent() {
    const {data, error, isLoading, refetch } = useQuery('posts', fetchPosts, {
        staleTime:5*60*1000,
    });
    if (isLoading) return <div>Loading...</div>;

    if (error) return <div>An error occurred:{error.message}</div>

  return (
    <div>
    <h1>Posts</h1>
    <button onClick={refetch}>Refetch</button> {}
    <ul>
      {data.map((post) => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default PostsComponent