import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { BookListProvider } from "./context/BookListContext";
import { FavouriteProvider } from "./context/FavouriteContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <BookListProvider>
        <FavouriteProvider>
          <App />
        </FavouriteProvider>
      </BookListProvider>
    </Router>
  </StrictMode>
);
