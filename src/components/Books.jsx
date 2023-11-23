/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import BookPreview from "./BookPreview";

export default function Books({ books }) {
  return (
    <div className="book-section">
      <h2>Look at All Our Books!</h2>
      <ul className="book-preview">
        {books.map((book, index) => (
          <BookPreview book={book} key={index} />
        ))}
      </ul>
    </div>
  );
}
