import BookCard from "../components/BookCard";
import { useBookContext } from "../context/BookListContext";

export default function Read() {
  const { readList } = useBookContext();

  if (!readList.length) return <h1>Loading.....</h1>;

  return (
    <>
      <h3>Read Books</h3>
      <div className="book-container">
        {readList.map((book, i) => (
          <BookCard key={book.id} {...book} i={i} showDetails />
        ))}
      </div>
    </>
  );
}
