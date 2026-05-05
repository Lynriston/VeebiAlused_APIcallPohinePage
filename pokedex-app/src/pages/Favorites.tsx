import { useEffect, useState } from "react";
import type { JSX } from "react";
import { Link } from "react-router-dom";
import { getFavorites, removeFavorite } from "../utils/favorites";


//Lemmikute funktsioon
export default function Favorites(): JSX.Element {
    //lemmikute hoidmise state
    const [favorites, setFavorites] = useState<string[]>([]);

    //Ühe kordne aktiveeruv kood mis laeb lemmikud LocalStorageist
    useEffect(() => {
        setFavorites(getFavorites())
    }, []);

    //Lemmikust eemaldumise funktsioon
    function handleRemove(name: string) {
        removeFavorite(name);
        setFavorites(getFavorites());
    }

    return (
        <div className="container">
            <h1>Favorites</h1>

            {/* Lemmikute puudumisel kuvatakse tekst */}
            {favorites.length === 0 ? (
                <p>No favorites yet</p>
            ) : (
                <div
                    className="grid"
                >
                    {/* läbime kõik lemmikud */}
                    {favorites.map((name) => (
                        <div
                            key={name}
                            style={{
                                border: "1px solid #ccc",
                                borderRadius: "10px",
                                padding: "10px",
                                textAlign:"center",
                            }}
                        >
                            {/* //link detail vaatesse */}
                            <Link to={`/pokemon/${name}`} style={{ textDecoration: "none" }}>
                                <h3 style={{ textTransform: "capitalize" }}>{name}</h3>
                            </Link>

                            {/* Nupp lemmikute eemaldamiseks */}
                            <button 
                                onClick={() => handleRemove(name)}
                                className="button"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );    
}