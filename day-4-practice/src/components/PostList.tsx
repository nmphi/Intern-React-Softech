// src/components/PostList.tsx
import React from 'react';
import PostItem from './PostItem';

const posts = [
  {
    id: 1,
    title: 'How to Learn React',
    content: 'React is a JavaScript library for building user interfaces...',
    thumbnail: 'https://internetviettel.vn/wp-content/uploads/2017/05/1-2.jpg',
  },
  {
    id: 2,
    title: 'Mastering TypeScript',
    content: 'TypeScript provides static typing to JavaScript...',
    thumbnail: 'https://internetviettel.vn/wp-content/uploads/2017/05/1-2.jpg',
  },
];


const PostList = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          title={post.title}
          content={post.content}
          thumbnail={post.thumbnail}
        />
      ))}
    </div>
  );
};

export default PostList;
