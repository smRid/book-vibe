import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import Books from "../pages/books/Books";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import BookDetails from "../pages/BookDetails/BookDetails";
import PagesToRead from "../pages/PagesToRead/PagesToRead";


export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Homepage,
      },
      {
        path: '/books',
        Component: Books,
      },
      {
        path: '/bookdetails/:bookId',
        Component: BookDetails,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: '/pages-to-read',
        Component: PagesToRead,
        loader: () => fetch("/booksData.json"),
      }
    ],
    errorElement: <ErrorPage />
  },

])