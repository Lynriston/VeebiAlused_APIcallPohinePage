import { useEffect, useState } from "react";
import type { PokemonListItem } from "../types/pokemon";
import { getPokemonList } from "../services/api";
import PokemonCard from "../components/PokemonCard";


export default function Home(): JSX.Element {
    const [pokemon, setPokemon] = useState<PokemonListItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [search, setSearch] = useState<string>("");

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await getPokemonList();
                setPokemon(res.data.results);
            } catch (err) {
                setError("Error loading data");
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const filtered = pokemon.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return (
        <div>
            <h1>Pokedex</h1>
            <input
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "10px"
                }}
            >
                {filtered.map((p) => (
                    <PokemonCard key={p.name} pokemon={p} />
                ))}
            </div>
        </div>
    );
}