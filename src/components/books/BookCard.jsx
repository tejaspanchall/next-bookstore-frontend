'use client';
import React from "react";

const BookCard = ({ book, onClick, getImageUrl, showRemoveButton, onRemove }) => {
  const handleRemove = (e) => {
    e.stopPropagation();
    onRemove(book.id);
  };

  // Add logging for image URL construction
  const imageUrl = getImageUrl(book.image);
  console.log('BookCard - Book details:', {
    bookId: book.id,
    originalImagePath: book.image,
    constructedImageUrl: imageUrl
  });

  return (
    <div
      className="h-full border-0 overflow-hidden rounded shadow-md cursor-pointer transition duration-300 hover:shadow-lg relative"
      style={{ backgroundColor: 'var(--color-bg-secondary)' }}
      onClick={onClick}
    >
      <div className="relative">
        <img
          src={imageUrl}
          alt={book.title}
          className="w-full h-64 object-cover"
          loading="lazy"
          onError={(e) => {
            console.error('BookCard - Image load error:', {
              bookId: book.id,
              imageUrl: imageUrl,
              error: e.message
            });
            e.target.src = "https://via.placeholder.com/200x300?text=Book+Cover";
          }}
        />
        <div 
          className="absolute top-0 right-0 m-2 px-2 py-1 rounded text-sm font-medium"
          style={{ 
            backgroundColor: 'var(--color-secondary)',
            color: 'var(--color-bg-primary)'
          }}
        >
          {book.author}
        </div>
        {showRemoveButton && (
          <button
            onClick={handleRemove}
            className="absolute top-0 left-0 m-2 w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200 text-xl font-bold"
            style={{ 
              backgroundColor: '#ff0000',
              color: 'white'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#cc0000'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ff0000'}
          >
            ×
          </button>
        )}
      </div>
      <div className="p-3">
        <h5 
          className="font-bold"
          style={{ color: 'var(--color-primary)' }}
        >
          {book.title}
        </h5>
      </div>
    </div>
  );
};

export default BookCard;