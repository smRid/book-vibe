import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import {
    addReadListToLocalDB,
    addWishListToLocalDB,
    getAllReadListFromLocalDB,
    getAllWishListFromLocalDB,
    removeReadListFromLocalDB,
    removeWishListFromLocalDB
} from '../utils/localDB';

export const BookContext = createContext();

const BookProvider = ({ children }) => {

    const [readList, setReadList] = useState(() => getAllReadListFromLocalDB());
    const [wishList, setWishList] = useState(() => getAllWishListFromLocalDB());

    const handleReadButton = (currentBook) => {

        addReadListToLocalDB(currentBook);

        const isExistBook = readList.find((book) => book.bookId === currentBook.bookId);
        
        if (isExistBook) {
            toast.error(`You have already added this ${currentBook.bookName} to your read list.`);
        } else {
            setReadList([...readList, currentBook]);
            toast.success(` ${currentBook.bookName} the book has been added to your read list.`);
        }
    };

    const handleWishListButton = (currentBook) => {

        
       
        const isExistInReadList = readList.find(
            (book) => book.bookId === currentBook.bookId
        );

        if (isExistInReadList) {
            toast.error(`You have already added this ${currentBook.bookName} to your read list. You can't add it to your wish list.`);
            return;
        }

        addWishListToLocalDB(currentBook);

        const isExistBook = wishList.find((book) => book.bookId === currentBook.bookId);
       
        if (isExistBook) {
            toast.error(`You have already added this ${currentBook.bookName} to your wish list.`);
        } else {
            setWishList([...wishList, currentBook]);
            toast.success(` ${currentBook.bookName} has been added to your wish list.`);
        }
    };

    const handleRemoveReadBook = (bookId) => {
        const bookToRemove = readList.find((book) => book.bookId === bookId);
        removeReadListFromLocalDB(bookId);
        setReadList((currentReadList) => currentReadList.filter((book) => book.bookId !== bookId));

        if (bookToRemove) {
            toast.success(`${bookToRemove.bookName} has been removed from your read list.`);
        }
    };

    const handleRemoveWishBook = (bookId) => {
        const bookToRemove = wishList.find((book) => book.bookId === bookId);
        removeWishListFromLocalDB(bookId);
        setWishList((currentWishList) => currentWishList.filter((book) => book.bookId !== bookId));

        if (bookToRemove) {
            toast.success(`${bookToRemove.bookName} has been removed from your wish list.`);
        }
    };


    const data = {
        readList,
        setReadList,
        handleReadButton,
        handleRemoveReadBook,
        wishList,
        setWishList,
        handleWishListButton,
        handleRemoveWishBook,
    };

    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;
