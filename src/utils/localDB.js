const getAllReadListFromLocalDB = () => {
    const allReadList = localStorage.getItem("readList");

    if (allReadList) return JSON.parse(allReadList);

    return [];
};

const addReadListToLocalDB = (book) => {
    const allBooks = getAllReadListFromLocalDB();
    const isAlreadyExist = allBooks.find((b) => b.bookId === book.bookId);

    if (!isAlreadyExist) {
        allBooks.push(book);
        localStorage.setItem("readList", JSON.stringify(allBooks));
    }
}

const removeReadListFromLocalDB = (bookId) => {
    const allBooks = getAllReadListFromLocalDB();
    const updatedBooks = allBooks.filter((book) => book.bookId !== bookId);
    localStorage.setItem("readList", JSON.stringify(updatedBooks));
};

const getAllWishListFromLocalDB = () => {
    const allWishList = localStorage.getItem("wishList");

    if (allWishList) return JSON.parse(allWishList);

    return [];
};

const addWishListToLocalDB = (book) => {
    const allBooks = getAllWishListFromLocalDB();
    const isAlreadyExist = allBooks.find((b) => b.bookId === book.bookId);  

    if (!isAlreadyExist) {
        allBooks.push(book);
        localStorage.setItem("wishList", JSON.stringify(allBooks));
    }
}

const removeWishListFromLocalDB = (bookId) => {
    const allBooks = getAllWishListFromLocalDB();
    const updatedBooks = allBooks.filter((book) => book.bookId !== bookId);
    localStorage.setItem("wishList", JSON.stringify(updatedBooks));
};


export {
    getAllReadListFromLocalDB,
    addReadListToLocalDB,
    removeReadListFromLocalDB,
    getAllWishListFromLocalDB,
    addWishListToLocalDB,
    removeWishListFromLocalDB
};
