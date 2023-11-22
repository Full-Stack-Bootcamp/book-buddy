const baseUrl = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com";

export async function getAllBooks() {
  try {
    const response = await fetch(`${baseUrl}/api/books`, {
      headers: { "Content-Type": "application/json" },
    });
    const booksArray = await response.json();
    return booksArray.books;
  } catch (error) {
    console.log(error);
  }
}
