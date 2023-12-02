import BookPreview from "./BookPreview";

export default function AvailableBooks({ books }) {
  return (
    <div className="book-section">
      <h2>These Books are ready to rent RIGHT NOW!!</h2>
      <ul className="book-preview">
        {books.map((book, index) => {
          if (book.available === true) {
            return <BookPreview book={book} key={index} />;
          }
        })}
      </ul>
    </div>
  );
}
