import { Link, useLocation } from "react-router-dom";

/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
export default function SingleBook() {
  const location = useLocation();
  const book = location.state.book;
  const { title, author, description, coverimage, available, id } = book;
  console.log(book);

  return (
    <div className="single-book">
      <div className="info">
        <h2>{title}</h2>
        <h4>By {author}</h4>
        <p>{description}</p>
        <h4>
          Availability:{" "}
          {available ? "Ready to Check Out" : "Currently Checked Out"}
        </h4>
        <Link to="/books">
          <button>Return</button>
        </Link>
      </div>
      <div className="book-cover">
        <img src={coverimage} alt={`Cover of ${title}`} />
      </div>
    </div>
  );
}
