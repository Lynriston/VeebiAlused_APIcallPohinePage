import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import PokemonDetail from "./pages/PokemonDetail"
import Favorites from "./pages/Favorites"
import Navbar from "./components/Navbar"

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  )
}