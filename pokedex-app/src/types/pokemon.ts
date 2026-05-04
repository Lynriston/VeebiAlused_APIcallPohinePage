export interface PokemonListItem {
    name: string;
    url: string;
}

export interface PokemonType {
    type: {
        name:string;
    };
}

export interface PokemonAbility {
    ability: {
        name:string;
    };
}

export interface PokemonStat {
    base_stat: number;
    stat: {
        name: string;
    };
}

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