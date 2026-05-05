import { useEffect, useState } from "react";
import { getPokemon } from "../services/api";
import { useParams } from "react-router-dom";
import type { Pokemon } from "../types/pokemon";
import type { JSX } from "react";
import { isFavorite, toggleFavorite } from "../utils/favorites";
import { Card, CardContent, Typography, Stack, Chip, Button } from "@mui/material";


//PokemonDetail funktsioon
export default function PokemonDetail(): JSX.Element {
    const { name } = useParams<{ name: string }>(); //Võtab URL-ist pokemoni nime
    const [pokemon, setPokemon] = useState<Pokemon | null>(null); //State pokemoni andmete jaoks
    const [favorite, setFavorite] = useState<boolean>(false); //State, kas pokemon on lemmikutest

    useEffect(() => {
        async function fetchData() {
            if (!name) return;
            //Kutsub API konkreetse pokemoni jaoks
            const res = await getPokemon(name);
            //Salvestab andmed state'i
            setPokemon(res.data);
            //Kontrollib kas pokemon on lemmik
            setFavorite(isFavorite(name))
        }
        fetchData();
    }, [name]);

    // Funktsioon lemmiku lisamiseks/eemaldamiseks
    function handleToggleFavorite() {
        if (!pokemon) return;

        //Muudab lemmiku oleku
        toggleFavorite(pokemon.name);
        //Uuendab UI stateäi
        setFavorite((prev) => !prev)
    }

    //Kui andmed pole veel laetud
    if (!pokemon) return <p>Loading...</p>

    return (
        <Card sx={{ maxWidth: 400, margin: "auto", mt: 3 }}>
        <CardContent>
            {/* Pokemoni nimi */}
            <Typography variant="h4" align="center">
                {pokemon.name}
            </Typography>

            {/* Pokemoni pilt */}
            <img
                src={pokemon.sprites.front_default}
                style={{ display: "block", margin: "auto" }}
            />

            {/* Pokemoni andmed */}
            <Typography>Height: {pokemon.height}</Typography>
            <Typography>Weight: {pokemon.weight}</Typography>
            <Typography>Abilities: {pokemon.abilities.map((a) => a.ability.name).join(", ")}</Typography>
            <Typography>Stats: {pokemon.stats.map((s) => s.base_stat).join(" ")}</Typography>


            {/* Pokemoni tüübid */}
            <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
            {pokemon.types.map((t) => (
                <Chip key={t.type.name} label={t.type.name} />
            ))}
            </Stack>

            {/* Lemmikute nupp */}
            <Button
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleToggleFavorite}
            >
            {favorite ? "Remove from Favorites" : "Add to Favorites"}
            </Button>
        </CardContent>
        </Card>
        
    )
}