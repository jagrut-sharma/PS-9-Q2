import BookCard from "../components/BookCard";
import { useBookContext } from "../context/BookListContext";

export default function Home() {
  const { bookList } = useBookContext();

  if (!bookList.length) return <h1>Loading books....</h1>;

  return (
    <div>
      <h3>All Books</h3>
      <div className="book-container">
        {bookList.map((book, i) => (
          <BookCard key={book.id} {...book} i={i} />
        ))}
      </div>
    </div>
  );
}
