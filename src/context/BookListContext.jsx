import { createContext, useContext, useState, useEffect } from "react";

import { fakeFetch } from "../API/fakeFetch";

const BookListContext = createContext({
  bookList: [],
  user: {},
  readList: [],
  readHandler: (id) => {}
});

export function BookListProvider({ children }) {
  const [bookList, setBookList] = useState([]);
  const [readList, setReadList] = useState([]);
  const [user, setUser] = useState({});

  const fetchBookList = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/books");
      const {
        data: { books, user }
      } = res;
      setBookList(books);
      setUser(user);
      setReadList(getReadBooks(books));
    } catch (err) {
      console.error(`${err.status}: ${err.message}`);
    }
  };

  useEffect(() => {
    fetchBookList();
  }, []);

  const getReadBooks = (books) => {
    return books.filter(({ read }) => read);
  };

  const readHandler = (book) => {
    setReadList([...readList, book]);
  };

  const bookListContext = {
    bookList,
    user,
    readList,
    readHandler
  };

  return (
    <BookListContext.Provider value={bookListContext}>
      {children}
    </BookListContext.Provider>
  );
}

export const useBookContext = () => useContext(BookListContext);
