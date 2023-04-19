import { Link } from "react-router-dom";

import { useFavouriteContext } from "../context/FavouriteContext";
import { useBookContext } from "../context/BookListContext";

export default function BookCard(book) {
  const {
    id,
    title,
    author,
    image,
    i,
    showDetails,
    publisher,
    year,
    price
  } = book;

  const { favouriteList, addFavouriteHandler } = useFavouriteContext();
  const { readList, readHandler } = useBookContext();

  return (
    <div className="book-card">
      <img src={image} alt={title} className="book-img" />
      <p>{i + 1}</p>
      <p>Title: {title}</p>
      <p>Author: {author}</p>

      {showDetails ? (
        <>
          <p>Publisher: {publisher}</p>
          <p>Price: ${price}</p>
          <p>Published Year: {year}</p>
        </>
      ) : (
        <>
          <div className="btn-container">
            {readList.find((book) => book.id === id) ? (
              <button disabled>Already Read</button>
            ) : (
              <button onClick={() => readHandler(book)}>Mark as Read</button>
            )}
          </div>
          <div className="btn-container">
            {favouriteList.find((book) => book.id === id) ? (
              <button>
                <Link className="link-btn" to="/favourites">
                  Go to Fav
                </Link>
              </button>
            ) : (
              <button onClick={() => addFavouriteHandler(book)}>
                Add to Fav
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
