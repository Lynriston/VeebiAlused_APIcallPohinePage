//Pokemoni list item
export interface PokemonListItem {
    name: string;
    url: string;
}

//Pokemoni tüüp
export interface PokemonType {
    type: {
        name:string;
    };
}

//Pokemoni ability
export interface PokemonAbility {
    ability: {
        name:string;
    };
}

//pokemoni statistika
export interface PokemonStat {
    base_stat: number;
    stat: {
        name: string;
    };
}

//Peamine pokemoni interface
export interface Pokemon {
    name: string;
    height: number;
    weight: number;
    sprites: {
        front_default: string;
    }
    types: PokemonType[];
    abilities: PokemonAbility[];
    stats: PokemonStat[];
}