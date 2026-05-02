import { useEffect, useState } from "react";
import { getPokemon } from "../services/api";
import { useParams } from "react-router-dom";
import type { Pokemon } from "../types/pokemon";
import type { JSX } from "react";


export default function PokemonDetail(): JSX.Element {
    const { name } = useParams<{ name: string }>();
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);

    useEffect(() => {
        async function fetchData() {
            if (!name) return;
            const res = await getPokemon(name);
            setPokemon(res.data);
        }
        fetchData();
    }, [name]);

    if (!pokemon) return <p>Loading...</p>

    return (
        <div>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
        </div>
    )
}