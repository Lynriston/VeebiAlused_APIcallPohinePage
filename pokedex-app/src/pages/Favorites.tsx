import { useEffect, useState } from "react";


export default function Favorites(): JSX.Element {
    const [favorites, setFavorites] = useState<string[]>([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("favorites") || "[]")
        setFavorites(data);
    }, []);

    return (
        <div>
            <h1>Favorites</h1>
            {favorites.length === 0 ? (
                <p>No favorites yet</p>
            ) : (
                favorites.map((f) => <p key={f}>{f}</p>)
            )}
        </div>
    );    
}