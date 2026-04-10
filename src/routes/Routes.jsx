import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import Books from "../pages/books/Books";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import BookDetails from "../pages/BookDetails/BookDetails";


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
      }
    ],
    errorElement: <ErrorPage />
  },

])