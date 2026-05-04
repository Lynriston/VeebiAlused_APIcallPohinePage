import { useEffect, useState } from "react";
import { getPokemon } from "../services/api";
import { useParams } from "react-router-dom";
import type { Pokemon } from "../types/pokemon";
import type { JSX } from "react";
import { isFavorite, toggleFavorite } from "../utils/favorites";


export default function PokemonDetail(): JSX.Element {
    const { name } = useParams<{ name: string }>();
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [favorite, setFavorite] = useState<boolean>(false);

    useEffect(() => {
        async function fetchData() {
            if (!name) return;
            const res = await getPokemon(name);
            setPokemon(res.data);
            setFavorite(isFavorite(name))
        }
        fetchData();
    }, [name]);

    function handleToggleFavorite() {
        if (!pokemon) return;

        toggleFavorite(pokemon.name);
        setFavorite((prev) => !prev)
    }

    if (!pokemon) return <p>Loading...</p>

    return (
        <div>
            <button onClick={handleToggleFavorite}>
                {favorite ? "Remove from Favorites" : "Add to Favorites"}
            </button>
            <h1>{pokemon.name.toUpperCase()}</h1>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <h3>Types</h3>
            <ul>
                {pokemon.types.map((t) => (
                    <li key={t.type.name}>{t.type.name.toUpperCase()}</li>
                ))}
            </ul>
            <h3>Abilites</h3>
            <ul>
                {pokemon.abilities.map((a) => (
                    <li key={a.ability.name}>{a.ability.name.toUpperCase()}</li>
                ))}
            </ul>
            <h3>Stat</h3>
            <ul>
                {pokemon.stats.map((s) => (
                    <li key={s.stat.name}>{s.base_stat}</li>
                ))}
            </ul>
        </div>
        
    )
}