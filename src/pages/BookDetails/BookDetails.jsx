import { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../context/BookContext';
import BookCover from '../../components/ui/BookCover';


const BookDetails = () => {

    const { bookId } = useParams();

    const books = useLoaderData();

    const expectedBook = books.find((book) => book.bookId == bookId);

    const { handleReadButton, handleWishListButton } = useContext(BookContext);

    return (
        <div className='container mx-auto min-h-screen'>
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12 px-5 lg:px-0 ">
                <figure className='bg-[#131313]/5 rounded-2xl w-full flex items-center justify-center'>
                    <BookCover
                        book={expectedBook}
                        alt={expectedBook?.bookName}
                        className='rounded-2xl h-[400px] py-5 object-contain' />
                </figure>
                <div className="card-body flex flex-col gap-6 h-full">
                    <div className="flex flex-col gap-4">
                        <h2 className="card-title text-[40px] font-bold">{expectedBook?.bookName}</h2>
                        <p className='text-xl font-medium'>By : {expectedBook?.author}</p>
                    </div>
                    <div className="border-t border-b border-[#131313]/15 py-4">
                        <p className='text-xl font-medium'>{expectedBook?.category}</p>
                    </div>
                    <div className="">
                        <p className='text-lg leading-7'><span className='font-bold'>Review : </span>{expectedBook?.review}</p>
                    </div>
                    <div className="border-b border-[#131313]/15 pb-6 flex justify-start gap-4">
                        <div className="">
                            <p className='text-lg font-bold'>Tag</p>
                        </div>
                        <div className="">
                            <p className='flex gap-3'>
                                {expectedBook?.tags.map((tag) => (
                                    <div className="badge badge-soft badge-success">{tag}</div>
                                ))}
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-10">
                        <div className="flex flex-col gap-3 text-lg text-[#131313]/70">
                            <p>Number of Pages:</p>
                            <p>Publisher:</p>
                            <p>Year of Publishing:</p>
                            <p>Rating:</p>
                        </div>
                        <div className="flex flex-col gap-3 text-lg font-semibold">
                            <p>{expectedBook.totalPages}</p>
                            <p>{expectedBook.publisher}</p>
                            <p>{expectedBook.yearOfPublishing}</p>
                            <p>{expectedBook.rating}</p>
                        </div>
                    </div>
                    <div className="card-actions flex gap-4">
                        <button className="btn py-5 px-7 text-lg font-bold border border-[#131313]/30 bg-transparent hover:text-[#50B1C9] hover:border-[#50B1C9]" onClick={() => handleReadButton(expectedBook)}>Read</button>
                        <button className="btn py-5 px-7 text-lg font-bold bg-[#50B1C9] text-white hover:bg-transparent hover:text-[#50B1C9] hover:border-[#50B1C9]" onClick={() => handleWishListButton(expectedBook)}>Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
