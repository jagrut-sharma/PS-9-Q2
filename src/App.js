import { Routes, Route } from "react-router-dom";

import "./styles.css";
import Home from "./pages/Homes";
import Header from "./components/Header";
import Favourite from "./pages/Favourite";
import Read from "./pages/Read";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourite />} />
        <Route path="/read" element={<Read />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
