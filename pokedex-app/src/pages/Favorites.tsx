import { useEffect, useState } from "react";
import type { JSX } from "react";
import { Link } from "react-router-dom";
import { getFavorites, removeFavorite } from "../utils/favorites";


export default function Favorites(): JSX.Element {
    const [favorites, setFavorites] = useState<string[]>([]);

    useEffect(() => {
        setFavorites(getFavorites())
    }, []);

    function handleRemove(name: string) {
        removeFavorite(name);
        setFavorites(getFavorites());
    }

    return (
        <div style={{ padding: "20px" }}>
            <h1>Favorites</h1>

            {favorites.length === 0 ? (
                <p>No favorites yet</p>
            ) : (
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
                        gap: "15px",
                    }}
                >
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
                            <Link to={`/pokemon/${name}`} style={{ textDecoration: "none" }}>
                                <h3 style={{ textTransform: "capitalize" }}>{name}</h3>
                            </Link>

                            <button 
                                onClick={() => handleRemove(name)}
                                style={{
                                    marginTop: "10px",
                                    padding: "5px 10px",
                                    cursor: "pointer",
                                }}
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