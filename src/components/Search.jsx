import React, { useEffect, useState } from "react";
import BookPreview from "./BookPreview";

export default function Search({ bookList }) {
  const [resultArray, setResultArray] = useState([]);

  function handleSearch(e) {
    let searchResults = bookList.filter((book) =>
      book.title.includes(e.target.value)
    );
    console.log(searchResults);
    searchResults.length > 0
      ? setResultArray(searchResults)
      : setResultArray(["No Results"]);
  }

  return (
    <div id="search-results">
      <div className="search-bar">
        <h3>Search Our Library For Any Book You've ever Wanted!</h3>
        <label>
          Book Title:
          <input
            type="text"
            placeholder="Search"
            // value={searchInput}
            onChange={handleSearch}
          />
        </label>
      </div>
      {resultArray != 0 && (
        <>
          <h2>Search Results</h2>
          {/* <h2>Search Results</h2> */}
          <div>
            {resultArray[0] === "No Results" ? (
              <p>No Results</p>
            ) : (
              <>
                <ul>
                  {resultArray.map((book, index) => {
                    return <BookPreview key={index} book={book} />;
                  })}
                </ul>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
