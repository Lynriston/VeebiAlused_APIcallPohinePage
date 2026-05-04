import type { PokemonListItem } from "../types/pokemon";
import { Link } from "react-router-dom"
import type { JSX } from "react";


interface Props {
    pokemon: PokemonListItem
}

export default function PokemonCard({ pokemon }: Props): JSX.Element {
    return (
        <div style={{ border: "1px solid #ccc", padding: "10px"}}>
            <Link to={`/pokemon/${pokemon.name}`}>
                <h3 style={{ textTransform: "capitalize"}}>{pokemon.name}</h3>
            </Link>
        </div>
    )
}