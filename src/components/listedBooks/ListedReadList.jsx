import React, { useContext, useEffect, useState } from 'react';
import { HiOutlineUsers } from 'react-icons/hi';
import { IoDocumentTextOutline, IoLocationOutline } from 'react-icons/io5';
import { BookContext } from '../../context/BookContext';
import BookCover from '../ui/BookCover';

const ListedReadList = ({ sortingType }) => {

    const { readList } = useContext(BookContext);

    const [filteredReadList, setFilteredReadList] = useState(readList);

    useEffect(() => {
        if (sortingType) {
            if (sortingType === "pages") {
                const sortedData = [...readList].sort(
                    (a, b) => a.totalPages - b.totalPages,
                )
                setFilteredReadList(sortedData);
            } else if (sortingType === "rating") {
                const sortedData = [...readList].sort(
                    (a, b) => b.rating - a.rating,
                )
                setFilteredReadList(sortedData);
            }
        }
    }, [sortingType, readList]);


    if (filteredReadList.length === 0) {
        return (
            <div className='flex flex-col items-center justify-center gap-4 py-20 bg-[#131313]/5 rounded-2xl mt-12'>
                <h2 className='text-2xl font-bold'>No books to display</h2>
                <p className='text-gray-500'>You haven't read any books yet.</p>
            </div>
        );
    }


    return (
        <div>
            <div className="">
                {filteredReadList.map((book) => (
                    <div key={book.id}>
                        <div className="flex flex-col lg:flex-row items-center gap-6 p-6 border border-[#131313]/15 rounded-2xl mt-8">
                            <figure className='w-[230px] py-7 px-12 bg-[#131313]/5 rounded-2xl'>
                                <BookCover
                                    book={book}
                                    alt={book.bookName}
                                    className='w-full object-contain' />
                            </figure>
                            <div className="flex flex-col gap-4 w-full">
                                <h1 className="text-2xl font-bold">{book.bookName}</h1>
                                <p className="text-gray-500 text-lg font-medium">By : {book.author}</p>
                                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                                   <div className="flex items-center gap-4">
                                     <div className="">
                                        <p className='font-bold'>Tag</p>
                                    </div>
                                    <div className="">
                                        <p>
                                            {book?.tags.map((tag) => (
                                                <div className="badge badge-soft badge-success">{tag}</div>
                                            ))}
                                        </p>
                                    </div>
                                   </div>
                                    <div className="">
                                        <p className='flex items-center gap-2'>
                                            <IoLocationOutline />
                                            Year of Publishing: {book.yearOfPublishing}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 border-b border-[#131313]/15 pb-4">
                                    <p className='flex items-center gap-2'>
                                        <HiOutlineUsers />
                                        Publisher: {book.publisher}
                                    </p>
                                    <p className='flex items-center gap-2'>
                                        <IoDocumentTextOutline />
                                        Page: {book.totalPages}
                                    </p>
                                </div>
                                <div className="flex flex-col lg:flex-row text-center lg:items-center gap-4">
                                    <div className="py-1.5 px-3 text-[#328EFF] bg-[#328EFF]/15 rounded-full">Category: {book.category}</div>
                                    <div className="py-1.5 px-3 text-[#FFAC33] bg-[#FFAC33]/15 rounded-full">Rating: {book.rating}</div>
                                    <button className="py-1.5 px-3 text-white bg-[#23BE0A] hover:bg-transparent hover:text-[#23BE0A] hover:border hover:border-[#23BE0A] rounded-full">Success</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListedReadList;
