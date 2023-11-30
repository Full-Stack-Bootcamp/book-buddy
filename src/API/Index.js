const baseUrl = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

export async function getAllBooks() {
  try {
    const response = await fetch(`${baseUrl}/books`, {
      headers: { "Content-Type": "application/json" },
    });
    const booksArray = await response.json();
    console.log(booksArray);
    return booksArray.books;
  } catch (error) {
    console.log(error);
  }
}

export async function register(user) {
  try {
    const response = await fetch(`${baseUrl}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

export async function apiLogIn(user) {
  try {
    const response = await fetch(`${baseUrl}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

export async function getUserInfo(token) {
  try {
    const response = await fetch(`${baseUrl}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

export async function rentBookApi(userKey, bookId) {
  try {
    const response = await fetch(`${baseUrl}/books/${bookId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userKey}`,
      },
      body: JSON.stringify({ available: false }),
    });
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
}

export async function reservationListApi(userId) {
  try {
    const response = await fetch(`${baseUrl}/reservations`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userId}`,
      },
    });
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
}

export async function returnBookApi(userId, resId) {
  try {
    const response = await fetch(`${baseUrl}/reservations/${resId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userId}`,
      },
    });
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
}
