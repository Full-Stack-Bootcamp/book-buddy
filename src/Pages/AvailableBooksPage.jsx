import { useState, useEffect } from "react";
import { getAllBooks } from "../API/Index";
import AvailableBooks from "../components/AvailableBooks";

export default function AvailableBooksPage() {
  const [bookList, setBookList] = useState([]);
  useEffect(() => {
    async function retrieveBookList() {
      try {
        const newBooks = await getAllBooks();
        setBookList(newBooks);
      } catch (error) {
        console.log(error);
      }
    }
    retrieveBookList();
  }, []);
  return <AvailableBooks books={bookList} />;
}
