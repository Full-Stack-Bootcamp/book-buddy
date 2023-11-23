import Books from "../components/Books";
import { useState, useEffect } from "react";
import { getAllBooks } from "../API/Index";
import Search from "../components/Search";

export default function BooksPage() {
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
  return (
    <>
      <Books books={bookList} />
    </>
  );
}
