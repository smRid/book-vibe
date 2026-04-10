import React, { useMemo, useState, useEffect } from 'react';

const FALLBACK_COVER = "/book-cover-placeholder.svg";

const extractIsbn = (book) => {
    if (book?.isbn) {
        return String(book.isbn).replace(/[^0-9X]/gi, "");
    }

    const matches = book?.image?.match(/(\d{10,13}|979\d{10})/);
    return matches ? matches[0] : "";
};

const buildCoverSources = (book) => {
    const isbn = extractIsbn(book);

    const sources = [
        book?.image,
        isbn ? `https://books.google.com/books/content?vid=ISBN${isbn}&printsec=frontcover&img=1&zoom=1&source=gbs_api` : "",
        isbn ? `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg?default=false` : "",
        FALLBACK_COVER,
    ];

    return [...new Set(sources.filter(Boolean))];
};

const BookCover = ({ book, alt, className = "" }) => {
    const sources = useMemo(() => buildCoverSources(book), [book]);
    const [sourceIndex, setSourceIndex] = useState(0);

    useEffect(() => {
        setSourceIndex(0);
    }, [sources]);

    const handleError = () => {
        setSourceIndex((currentIndex) => {
            if (currentIndex >= sources.length - 1) {
                return currentIndex;
            }

            return currentIndex + 1;
        });
    };

    return (
        <img
            src={sources[sourceIndex]}
            alt={alt}
            className={className}
            loading="lazy"
            onError={handleError}
        />
    );
};

export default BookCover;
