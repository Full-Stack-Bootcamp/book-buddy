import { useState, useEffect } from "react";
import { getAllBooks } from "../API/Index";
import Search from "../components/Search";

export default function Homepage() {
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
      <h2 className="header">Welcome to the Library App!</h2>
      <Search bookList={bookList} />
    </>
  );
}
