import { useFavouriteContext } from "../context/FavouriteContext";

import BookCard from "../components/BookCard";

export default function Favourite() {
  const { favouriteList } = useFavouriteContext();

  if (!favouriteList.length) return <h3>Add some books here...</h3>;

  return (
    <>
      <h3>Favourite Books</h3>
      <div className="book-container">
        {favouriteList.map((book, i) => (
          <BookCard key={book.id} {...book} i={i} showDetails />
        ))}
      </div>
    </>
  );
}
