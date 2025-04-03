import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import About from "./components/About.jsx";
import Contact from "./components/contact.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import BookList from "./components/BookList.jsx";
import BookDetails from "./components/BookDetails.jsx";
import { BookProvider } from "./utils/BookContext.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <BookList />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookProvider>
      <RouterProvider router={appRouter} />
    </BookProvider>
  </StrictMode>
);