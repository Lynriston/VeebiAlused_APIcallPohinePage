export interface PokemonListItem {
    name: string;
    url: string;
}

export interface Pokemon {
    name: string;
    height: number;
    weight: number;
    sprites: {
        front_default: string;
    }
}