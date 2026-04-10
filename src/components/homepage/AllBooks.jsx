import React, { use } from 'react';
import BookCard from '../ui/BookCard';

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {

    const books = use(booksPromise);

    return (
        <div className='container mx-auto mt-24 flex flex-col gap-9 text-center'>
            <h1 className='text-[40px] font-bold'>Books Collection</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 lg:px-0 mb-20">
                {
                    books.map((book, ind) => {
                            return  <BookCard key={ind} book={book} /> 
                    })
                }
            </div>
        </div>
    );
};

export default AllBooks;
