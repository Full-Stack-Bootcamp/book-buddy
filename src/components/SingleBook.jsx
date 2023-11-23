import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { rentBookApi } from "../API/Index";

/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
export default function SingleBook() {
  const locationInfo = useLocation();
  const book = locationInfo.state.book;
  const { title, author, description, coverimage, id } = book;
  const [available, setAvailable] = useState(book.available);
  const [userKey, setUserKey] = useState(() =>
    localStorage.getItem("current-user-key")
  );

  async function rentBook() {
    const response = await rentBookApi(userKey, id);
    setAvailable(false);
  }

  return (
    <div className="single-book">
      <div className="info">
        <h2>{title}</h2>
        <h4>By {author}</h4>
        <p>{description}</p>

        {available && userKey ? (
          <button onClick={rentBook}>Rent Book</button>
        ) : !available && userKey ? (
          <h4>Currently Checked Out</h4>
        ) : (
          <h4>
            <Link to="/account">Log In or Register</Link> to rent this book!
          </h4>
        )}
      </div>
      <div className="book-cover">
        <img src={coverimage} alt={`Cover of ${title}`} />
      </div>
    </div>
  );
}
