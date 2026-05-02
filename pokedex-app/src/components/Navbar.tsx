import { Link } from "react-router-dom"

export default function Navbar(): JSX.Element {
    return (
        <nav style={{ padding: "10px", display: "flex", gap: "10px"}}>
            <Link to="/">Home</Link>
            <Link to="/favorites">Favorites</Link>
        </nav>
    )
}