import { Link } from "react-router-dom"
import type { JSX } from "react";


export default function Navbar(): JSX.Element {
    return (
        <nav style={{ padding: "10px", display: "flex", gap: "10px"}}>
            <Link to="/">Home</Link>
            <Link to="/favorites">Favorites</Link>
        </nav>
    )
}