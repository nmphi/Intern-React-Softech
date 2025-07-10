// src/components/BookList.tsx
import React from 'react';
import BookItem from './BookItem';

type Book = {
  id: number;
  title: string;
  author: string;
  year: number;
};

type BookListProps = {
  books: Book[];
};

const BookList = ({ books }: BookListProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '1rem',
        padding: '1rem',
      }}
    >
      {books.map((book) => (
        <BookItem
          key={book.id}
          title={book.title}
          author={book.author}
          year={book.year}
        />
      ))}
    </div>
  );
};

export default BookList;
