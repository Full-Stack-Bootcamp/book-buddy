/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
import { useEffect, useState } from "react";
import { getUserInfo, reservationListApi, returnBookApi } from "../API/Index";
import BookPreview from "./BookPreview";

export default function Account() {
  const [userInfoArray, setUserInfoArray] = useState([]);
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    async function retrieveUserInfo() {
      const userKey = localStorage.getItem("current-user-key");
      try {
        const userInfoApi = await getUserInfo(userKey);
        setUserInfoArray(userInfoApi);
        const bookListApi = await reservationListApi(userKey);
        setBookList(bookListApi.reservation);
      } catch (error) {
        console.log(error);
      }
    }
    retrieveUserInfo();
  }, []);

  function logOut() {
    localStorage.setItem("current-user-key", "");
    location.reload();
  }

  // const result = await returnBookApi(userId, bookId);
  // console.log(result);

  function accountBookPreview(bookInfo, indexInfo) {
    const { id } = bookInfo;
    const userKey = localStorage.getItem("current-user-key");
    async function returnBook() {
      const results = await returnBookApi(userKey, id);
    }
    return (
      <li>
        <BookPreview book={bookInfo} key={indexInfo} />
        <button onClick={returnBook}>Return</button>
      </li>
    );
  }

  return (
    <>
      <p>{userInfoArray.firstname}</p>
      <p>{userInfoArray.lastname}</p>
      <p>{userInfoArray.email}</p>
      <ul id="book-preview">
        {bookList.map((book, index) => accountBookPreview(book, index))}
      </ul>

      <button onClick={logOut}>logout</button>
    </>
  );
}
