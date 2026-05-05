import { useEffect, useState } from "react";
import type { PokemonListItem } from "../types/pokemon";
import { getPokemonList } from "../services/api";
import PokemonCard from "../components/PokemonCard";
import type { JSX } from "react";
import { Container, Grid, TextField } from "@mui/material";


//Home funktsioon
export default function Home(): JSX.Element {
    const [pokemon, setPokemon] = useState<PokemonListItem[]>([]); //State pokemonide hoidmiseks
    const [loading, setLoading] = useState<boolean>(true); //State laadimise oleku jaoks
    const [error, setError] = useState<string | null>(null); //State vigade jaoks
    const [search, setSearch] = useState<string>(""); //State otsingu jaoks

    useEffect(() => {
        async function fetchData() {
            try {
                //Kutsume API
                const res = await getPokemonList();
                //Salvestame tulemused state'i
                setPokemon(res.data.results);
            } catch (err) {
                //Kui tekib viga, salvestab veateate
                setError("Error loading data");
            } finally {
                //Laadimine lõppeb 
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    //Filtreerib pokemonid otsingu välja järgi
    const filtered = pokemon.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
    );

    //Kui andmed laevad
    if (loading) return <p>Loading...</p>
    //Kui tekkis viga
    if (error) return <p>{error}</p>

    return (
        <Container>
            {/* //Otsingu väli */}
            <TextField
                label="Search Pokémon"
                variant="outlined"
                value={search}
                //Uuendame search state'i iga sisendi muutusega
                onChange={(e) => setSearch(e.target.value)}
                sx={{ mb: 2 }}
            />

            <Grid container spacing={2}>
                {/* Kuvame filtreeritud pokemonid */}
                {filtered.map((p) => (
                    <PokemonCard key={p.name} pokemon={p} />
                ))}
            </Grid>
        </Container>
    );
}