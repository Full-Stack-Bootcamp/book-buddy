import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { rentBookApi } from "../API/Index";

/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
export default function SingleBook() {
  const location = useLocation();
  const book = location.state.book;
  const { title, author, description, coverimage, available, id } = book;
  const [userKey, setUserKey] = useState(() =>
    localStorage.getItem("current-user-key")
  );

  async function rentBook() {
    console.log(userKey);
    console.log(id);

    const response = await rentBookApi(userKey, id);
    console.log(response);
  }

  return (
    <div className="single-book">
      <div className="info">
        <h2>{title}</h2>
        <h4>By {author}</h4>
        <p>{description}</p>
        <h4>
          {available && userKey ? (
            <button onClick={rentBook}>Rent Book</button>
          ) : (
            "Currently Checked Out"
          )}
        </h4>
        <Link to="/books">
          <button>All Books</button>
        </Link>
      </div>
      <div className="book-cover">
        <img src={coverimage} alt={`Cover of ${title}`} />
      </div>
    </div>
  );
}
