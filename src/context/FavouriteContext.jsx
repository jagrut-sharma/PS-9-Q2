import { createContext, useContext, useState } from "react";

const FavouriteContext = createContext({
  favouriteList: [],
  addFavouriteHandler: (id) => {}
});

export const FavouriteProvider = function ({ children }) {
  const [favouriteList, setFavouriteList] = useState([]);

  const addFavouriteHandler = (book) => {
    setFavouriteList([...favouriteList, book]);
  };

  const favouriteContext = {
    favouriteList,
    addFavouriteHandler
  };

  return (
    <FavouriteContext.Provider value={favouriteContext}>
      {children}
    </FavouriteContext.Provider>
  );
};

export const useFavouriteContext = () => useContext(FavouriteContext);
