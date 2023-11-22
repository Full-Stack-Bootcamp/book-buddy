/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import { useEffect, useState } from "react";
import { getAllBooks } from "../API/Index";
import BookPreview from "./BookPreview";

export default function Books() {
  const [bookList, setBookList] = useState([]);
  useEffect(() => {
    async function retrieveBookList() {
      try {
        const newBooks = await getAllBooks();
        setBookList(newBooks);
        console.log("bookList");
        console.log(bookList);
      } catch (error) {
        console.log(error);
      }
    }
    retrieveBookList();
  }, []);
  return (
    <ul id="book-preview">
      {bookList.map((book, index) => (
        <BookPreview book={book} key={index} />
      ))}
    </ul>
  );
}
