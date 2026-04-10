import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const BookCard = ({ book }) => {
    return (
        <Link to={`/bookdetails/${book.bookId}`} className="card bg-base-100 shadow-sm p-6 border border-[#131313]/15 rounded-2xl">
            <figure className=' py-8 bg-[#F3F3F3] rounded-2xl'>
                <img
                    src={book.image}
                    alt={book.bookName}
                    className='rounded-xl h-48' />
            </figure>
            <div className="card-body p-0 flex flex-col gap-4 pb-2.5 border-b border-dashed border-[#131313]/15 mt-6">
                <div className="flex gap-3">
                    {book.tags.map((tag) => (
                        <div className="badge badge-soft badge-success">{tag}</div>
                    ))}
                </div>
                <h2 className="card-title text-2xl font-bold">
                    {book.bookName}
                </h2>
                <p className='font-medium text-start'>By: {book.author}</p>
            </div>
            <div className="flex items-center justify-between mt-2.5 text-lg">
                <p className='font-medium'>{book.category}</p>
                <div className="flex items-center gap-1">
                    <p className='font-medium'>{book.rating}</p>
                    <FaRegStar />
                </div>
            </div>
        </Link>
    );
};

export default BookCard;